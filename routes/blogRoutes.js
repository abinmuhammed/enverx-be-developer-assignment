const express = require("express");
const {
  userTest,
  createBlogs,
  getBlogs,
  updateBlogs,
  deleteBlogs,
  findBlogById,
  filterBlog
} = require("../controller/blogController");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.route("/test").get(asyncHandler(userTest));
router
  .route("/posts")
  .post(asyncHandler(createBlogs))
  .get(asyncHandler(getBlogs));

router
  .route("/posts/:id")
  .put(asyncHandler(updateBlogs))
  .delete(asyncHandler(deleteBlogs)).get(asyncHandler(findBlogById))

  router.get("/filtered-Posts/:filter",asyncHandler(filterBlog))

module.exports = router;
