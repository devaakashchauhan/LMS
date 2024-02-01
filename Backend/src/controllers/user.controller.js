import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
  console.log(fullname, email);

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new apiError(400, "All feilds all required !!! ");
  }

  const exitedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (exitedUser) {
    throw new apiError(400, "username and email already exists !!!");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;

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

export { registerUser };
