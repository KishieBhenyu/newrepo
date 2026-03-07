const express = require("express")
const router = express.Router()

// index route
router.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

module.exports = router