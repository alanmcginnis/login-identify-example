const express = require("express");
const expressLayout = require("express-ejs-layouts");
const { isActiveRoute } = require("./lib/routes/routeHelpers");
// Required
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// // Database
const connectDB = require("./lib/database/db");
connectDB();

const app = express();
app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.locals.isActiveRoute = isActiveRoute;

app.use("/", require("./lib/routes/main"));
app.use("/register", require("./lib/routes/register"));

app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port 3000");
});
