import { Router } from "express";
import {
  changeCurrentPassword,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  getCurrentUser,
  updateUserDetails,
  updateUserAvatar,
  courseUpload,
  allVideos,
  allcoruses,
  allTeacher,
  allstudent,
  deletevideo,
  deleteTeacher,
  deleteStudent,
  getusername,
  allvideos,
  courseUpdate,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerUser);
router.route("/courseupload").post(
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "video",
      maxCount: 1,
    },
  ]),
  courseUpload
);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/changepassword").post(verifyJWT, changeCurrentPassword);
router
  .route("/updatedetails")
  .post(verifyJWT, upload.single("avatar"), updateUserDetails);
router.route("/userDetails").post(verifyJWT, getCurrentUser);
router
  .route("/updateavatar")
  .post(verifyJWT, upload.single("avatar"), updateUserAvatar);

router.route("/courseupload").post(
  verifyJWT,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "video",
      maxCount: 1,
    },
  ]),
  courseUpload
);
router.route("/courseupdate").post(
  verifyJWT,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "video",
      maxCount: 1,
    },
  ]),
  courseUpdate
);

router.route("/mycourses").post(verifyJWT, allVideos);
router.route("/allcourses").post(allcoruses);
router.route("/allstudent").post(allstudent);
router.route("/allteacher").post(allTeacher);
router.route("/deletevideo").post(deletevideo);
router.route("/deletestudent").post(deleteStudent);
router.route("/deleteteacher").post(deleteTeacher);
router.route("/username").post(getusername);
router.route("/allvideos").post(allvideos);

export default router;
