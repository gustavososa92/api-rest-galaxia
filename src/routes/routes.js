const { Router } = require("express")
const router = Router()

const { getClimaDeldia } = require("../controllers/index.controller")

router.get("/clima", (req, res) => {
  res.send("diaaaaa")
})

module.exports = router
