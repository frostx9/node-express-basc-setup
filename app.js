const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")

const app = express()
app.use(cors({ origin: "*" }))

const port = process.env.PORT || 5000


// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
//   <------------------ All Route Start From Here ------------------>

app.post("/demo", (req, res) => {
  res.send("Hello")
})


//   <------------------ All Route End Here ------------------>
//Server Listen Port
app.listen(port, () => {
  console.log(`Server is runnin at ${port}`)
})
