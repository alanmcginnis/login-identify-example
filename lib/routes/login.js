const express = require("express");
const router = express.Router();

/**
 * GET /
 * LOGIN
 */
router.get("/", (req, res) => {
  try {
    res.render("login", {
      currentRoute: "/login",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
