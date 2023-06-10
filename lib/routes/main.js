const express = require("express");
const router = express.Router();
// const Post = require("../models/Post");
/**
 * GET /
 * HOME
 */

/**
 * GET /
 * HOME
 */
router.get("", (req, res) => {
  try {
    // const locals = {
    //   title: "NodeJs Blog",
    //   description: "Simple Blog created with NodeJs, Express & MongoDb.",
    // };

    res.render("index", {
      currentRoute: "/",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
