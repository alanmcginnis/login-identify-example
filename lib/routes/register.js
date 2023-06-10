const express = require("express");
const router = express.Router();

/**
 * GET /
 * HOME
 */
router.get("/", (req, res) => {
  try {
    const reject = () => {
      res.setHeader("www-authenticate", "Basic");
      res.sendStatus(401);
    };

    const authorization = req.headers.authorization;

    if (!authorization) {
      return reject();
    }

    const [username, password] = Buffer.from(
      authorization.replace("Basic ", ""),
      "base64"
    )
      .toString()
      .split(":");

    if (
      !(
        username === process.env.REGIS_ADMIN_NAME &&
        password === process.env.REGIS_ADMIN_PASS
      )
    ) {
      return reject();
    }
    res.render("register", {
      currentRoute: "/register",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
