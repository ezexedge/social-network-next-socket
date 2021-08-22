import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
import {
  createPost,
  uploadImage,
  postsByUser,
  userPost,
} from "../controllers/post";

router.post("/create-post", requireSignin, createPost);
router.post(
  "/upload-image",
  requireSignin,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);

router.get("/user-posts", requireSignin, postsByUser);
router.get("/user-post/:_id", requireSignin, userPost);

module.exports = router;