/* ******************************************
 * Primary server file
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const staticRoutes = require("./routes/static")

/* ***********************
 * View Engine
 *************************/
app.use(expressLayouts)
app.set("view engine", "ejs")
app.set("layout", "./layouts/layout") // layout file

/* ***********************
 * Static Files
 *************************/
app.use(express.static("public"))

/* ***********************
 * Routes
 *************************/
app.use("/", staticRoutes)

/* ***********************
 * Local Server Information
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

/* ***********************
 * Start Server
 *************************/
app.listen(port, () => {
  console.log(`App listening on http://${host}:${port}`)
})