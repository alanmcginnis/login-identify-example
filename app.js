const express = require('express');
const mysql = require("mysql")
// Required
const dotenv = require('dotenv')
dotenv.config({ path: './.env'})
const path = require("path")

// // Database
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT
})

db.connect((error) => {
  if(error) {
      console.log(error)
  } else {
      console.log("MySQL connected!")
  }
})

// // Config + Init
const publicDir = path.join(__dirname, './public')
const app = express();

app.set('view engine', 'hbs')
app.use(express.static(publicDir))

// Routes

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(process.env.PORT || 3000, ()=> {
  console.log("server started on port 3000")
})