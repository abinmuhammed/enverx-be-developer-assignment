const { isValidObjectId } = require("mongoose");
const blogsCollection = require("../model/blog");

const userTest = async (req, res) => {
  res.json({ msg: "UsertestWorking" });
};

// @desc Create a new blog post
// @route POST /posts
// @access public

const createBlogs = async (req, res) => {
  const { Firstname, BlogCategory, Content, Gender, Age } = req.body;

  // Mongoose - Schema is already present so dont have to check whether field is empty or not .
  // directly updloading the document

  const createNewBlog = await blogsCollection.create({
    Firstname,
    BlogCategory,
    Content,
    Gender,
    Age,
  });
  if (createBlogs) {
    res.status(201).json({ msg: `Blogs by ${Firstname} has been published ` });
  } else {
    res.status(400);
    throw new error("Incomplete data. Please provide all required fields.");
  }
};

// @desc Get all blog posts.
// @route GET /posts
// @access public

const getBlogs = async (req, res) => {
  // checking and returing all the documents from the collection
  const blogsList = await blogsCollection.find();
  if (blogsList) {
    return res.status(201).json({ data: blogsList });
  }
  res.status(404);
  throw new Error("NO blog data found");
};

// @desc Update an existing blog post.
// @route PUT /posts/:id
// @access public

const updateBlogs = async (req, res) => {
  const { id } = req.params;

  //   checking whether the objectID is valid or not
  if (!isValidObjectId(id)) {
    throw new Error("Oops ! invalid object ID found");
  }

  //   checking if any fields are empty or not
  if (
    req.body.Firstname == "" ||
    req.body.BlogCategory == "" ||
    req.body.Content == ""
  ) {
    throw new Error("Ooops ! Fields cannot be empty !");
  }

  //   finally updating the fields

  let updateResult = await blogsCollection.updateOne(
    { _id: id },
    {
      $set: req.body,
    }
  );
  if (updateResult) {
    res.status(200).json({ msg: `Blog has been updated successfully` });
  } else {
    res.status(404);
    throw new Error("update closed ");
  }
};

// @desc Delete a blog post.
// @route DELETE /posts/:id
// @access public

const deleteBlogs = async (req, res) => {
  const { id } = req.params;
  //   checking whether the objectID is valid or not
  if (!isValidObjectId(id)) {
    throw new Error("Oops ! invalid object ID found");
  }
  //   delete it

  let deleteResult = await blogsCollection.deleteOne({ _id: id });
  if (deleteResult) {
    res.status(200).json({ msg: `Blog has been deleted successfullly` });
  } else {
    res.status(404);
    throw new Error("Oops ! Document has not been deleted");
  }
};

// @desc Get a specific blog post by ID
// @route PUT /posts/:id
// @access public

const findBlogById = async (req, res) => {
  const { id } = req.params;
  //   checking whether the objectID is valid or not
  if (!isValidObjectId(id)) {
    throw new Error("Oops ! invalid object ID found");
  }
  let findBlog = await blogsCollection.findById({ _id: id });
  if (findBlog) {
    res.status(200).json({ msg: findBlog });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
};

// @desc Filter Blogs - Category
// @route GET /posts/:filter
// @access public

const filterBlog = async (req, res) => {
  let { filter } = req.params;

  if (filter == "") {
    throw new Error("Enter Filter field properly");
  }

  //   filter using blogCategory

  let filterResult = await blogsCollection.find({ BlogCategory: filter });
  console.log(filterResult);
  if (filterResult) {
    res.status(200).json({ data: filterResult });
  } else {
    res.status(404);
    throw new Error("Result not found");
  }
};

module.exports = {
  userTest,
  createBlogs,
  getBlogs,
  updateBlogs,
  deleteBlogs,
  findBlogById,
  filterBlog,
};
