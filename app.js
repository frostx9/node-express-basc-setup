const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
const colors = require("colors")
// import chalk from 'chalk' - Alternative of Colors

const app = express()
app.use(cors({ origin: "*" }))

const port = process.env.PORT || 5000

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});


// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())  // For Parsing Req Body Data
app.use(express.static(path.join(__dirname, "public")))
//   <------------------ All Route Start From Here ------------------>

app.post("/color", (req, res) => {
  console.log("Hello World".underline.red);
  console.log("Hello World".rainbow);
  console.log("This Is Warning".data);
})


//   <------------------ All Route End Here ------------------>
//Server Listen Port
app.listen(port, () => {
  console.log(`Server is runnin at ${port}`)
})
