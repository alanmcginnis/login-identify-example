const express = require("express");
// Required
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const path = require("path");

// // Config + Init
const port = proces.env.PORT || 3000;
const publicDir = path.join(__dirname, "./public");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(publicDir));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
