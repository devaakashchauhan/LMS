import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import { Video } from "../models/video.model.js";
import mongoose from "mongoose";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw new apiError(
      500,
      "Something went wrong while generating access token !!!"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password, role } = req.body;
  console.log("all data=", req.body);

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new apiError(400, "All feilds all required !!! ");
  }

  const exitedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (exitedUser) {
    throw new apiError(400, "username and email already exists !!!");
  }

  const avatarLocalPath = req.file?.path;
  console.log("req path =", avatarLocalPath);

  if (!avatarLocalPath) {
    throw new apiError(400, "Avatar files is required !!!");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) {
    throw new apiError(400, "Avatar files is required !!!");
  }

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    email,
    password,
    role,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new apiError(500, "Error when registering the user !!!");
  }

  return res
    .status(201)
    .json(new apiResponse(200, createdUser, "User registered successfully."));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username && !password) {
    throw new apiError(400, "username and password is requried !!!");
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw new apiError(400, "user does not exists.");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new apiError(401, "Password invalid.");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .cookie("role", user.role)
    .json(
      new apiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In successfully."
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .clearCookie("role")
    .json(new apiResponse(200, {}, "User logged Out."));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incommingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incommingRefreshToken) {
    throw new apiError(401, "Unauthorized request.");
  }

  try {
    const decodedToken = jwt.verify(
      incommingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new apiError(401, "Invalid refresh Token.");
    }

    if (incommingRefreshToken !== user?.refreshToken) {
      throw new apiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newrefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newrefreshToken, options)
      .json(
        new apiResponse(
          200,
          {
            accessToken,
            refreshToken: newrefreshToken,
          },
          "Access Token Refreshed."
        )
      );
  } catch (error) {
    throw new apiError(401, error?.message || "Invalid refresh token");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  // if (newPassword !== confPassword) {
  //   throw new apiError(400, "newpassword and confirm Password are different.");
  // }

  console.log(req.user, " == ak");
  const user = await User.findById(req.user?._id);

  const isPasswordCCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCCorrect) {
    throw new apiError(400, "Invalid Password.");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new apiResponse(200, {}, "password change successfully."));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new apiResponse(200, req.user, "Current user fetched successFully."));
});

const updateUserDetails = asyncHandler(async (req, res) => {
  const { fullname, email } = req.body;

  if (!fullname && !email) {
    throw new apiError(400, "1All feilds required.");
  }

  const exitedUseremail = await User.findOne({ email });

  if (exitedUseremail) {
    throw new apiError(402, "email already exists !!!");
  }

  const avatarLocalPath = req.file?.path;
  console.log(avatarLocalPath);
  if (!avatarLocalPath) {
    throw new apiError(400, "Avtar file is missing.");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) {
    throw new apiError(400, "Error while uploading avatar file.");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullname,
        email,
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new apiResponse(200, user, "Account details updated successfully."));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;
  console.log(avatarLocalPath);
  if (!avatarLocalPath) {
    throw new apiError(400, "Avtar file is missing.");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) {
    throw new apiError(400, "Error while uploading avatar file.");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  ).select("-password");

  return res
    .status(200)
    .json(new apiResponse(200, user, "Avatar Image uploaded Successfully."));
});

const courseUpload = asyncHandler(async (req, res) => {
  const { title, description, thumbnail, video } = req.body;

  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new apiError(401, "Inauthorized request. ");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new apiError(401, "Invalid accessToken.");
    }

    req.user = user;
  } catch (error) {
    throw new apiError(401, error?.message || "Invalid Access token");
  }

  const userdataId = req.user._id;

  const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
  console.log("req path =", thumbnailLocalPath);

  if (!thumbnailLocalPath) {
    throw new apiError(400, "thumbnail files is required !!!");
  }
  const videoFileLocalPath = req.files?.video[0]?.path;
  console.log("req path =", videoFileLocalPath);

  if (!videoFileLocalPath) {
    throw new apiError(400, "videoFile files is required !!!");
  }

  const thumbnailfile = await uploadOnCloudinary(thumbnailLocalPath);
  const videoFile = await uploadOnCloudinary(videoFileLocalPath);

  if (!thumbnailfile) {
    throw new apiError(400, "thumbnailfile files is required !!!");
  }
  if (!videoFile) {
    throw new apiError(400, "videoFile files is required !!!");
  }

  const videos = await Video.create({
    video: videoFile.url,
    thumbnail: thumbnailfile.url,
    title,
    description,
    owner: userdataId,
  });

  const createdVideo = await Video.findById(videos._id);

  if (!createdVideo) {
    throw new apiError(500, "Error when registering the user !!!");
  }

  return res
    .status(201)
    .json(
      new apiResponse(200, createdVideo, "User registered video successfully.")
    );
});

const allVideos = asyncHandler(async (req, res) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new apiError(401, "Inauthorized request. ");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new apiError(401, "Invalid accessToken.");
    }

    req.user = user;
  } catch (error) {
    throw new apiError(401, error?.message || "Invalid Access token");
  }

  const userdataId = req.user._id;
  // console.log(userdataId);

  const allVideos = await Video.find({ owner: userdataId });
  console.log(allVideos);

  return res
    .status(200)
    .json(new apiResponse(200, allVideos, "All videos fetched successFully."));
});

const allcoruses = asyncHandler(async (req, res) => {
  const allVideos = await Video.find();
  return res
    .status(200)
    .json(new apiResponse(200, allVideos, "All videos fetched successFully."));
});

const getusername = asyncHandler(async (req, res) => {
  const { ownerid } = req.body;

  const objectId = new mongoose.Types.ObjectId(ownerid);
  if (!objectId) {
    throw new apiError(400, "Video ID requried !!!");
  }

  const userName = await User.findById({ _id: objectId }).select(
    " -_id username"
  );
  return res
    .status(200)
    .json(new apiResponse(200, userName, "username fetched successFully."));
});

const allstudent = asyncHandler(async (req, res) => {
  const students = await User.find({ role: "student" });
  return res
    .status(200)
    .json(new apiResponse(200, students, "All videos fetched successFully."));
});

const allTeacher = asyncHandler(async (req, res) => {
  const teachers = await User.find({ role: "teacher" });
  return res
    .status(200)
    .json(new apiResponse(200, teachers, "All videos fetched successFully."));
});

const deletevideo = asyncHandler(async (req, res) => {
  const _id = req.body;
  console.log(_id);
  const objectId = new mongoose.Types.ObjectId(_id);
  if (!_id) {
    throw new apiError(400, "Video ID requried !!!");
  }

  const v = await Video.findOneAndDelete({ _id: objectId });
  console.log(v);
  return res
    .status(200)
    .json(new apiResponse(200, {}, "Video deleted successFully."));
});

const deleteStudent = asyncHandler(async (req, res) => {
  const _id = req.body;
  console.log(_id);
  const objectId = new mongoose.Types.ObjectId(_id);
  if (!_id) {
    throw new apiError(400, "Video ID requried !!!");
  }

  const v = await User.findOneAndDelete({ _id: objectId });
  console.log(v);
  return res
    .status(200)
    .json(new apiResponse(200, {}, "Student deleted successFully."));
});

const deleteTeacher = asyncHandler(async (req, res) => {
  const _id = req.body;
  console.log(_id);
  const objectId = new mongoose.Types.ObjectId(_id);
  if (!_id) {
    throw new apiError(400, "Video ID requried !!!");
  }

  const v = await User.findOneAndDelete({ _id: objectId });
  console.log(v);
  return res
    .status(200)
    .json(new apiResponse(200, {}, "Teacher deleted successFully."));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserDetails,
  updateUserAvatar,
  courseUpload,
  allVideos,
  allcoruses,
  allTeacher,
  allstudent,
  deletevideo,
  deleteStudent,
  deleteTeacher,
  getusername,
};
