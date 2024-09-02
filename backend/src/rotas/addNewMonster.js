const express = require("express")
const {authenticate} = require("../middleware/Auth.js")

const router = express.Router()

router.post("/add", authenticate, async (req, res) => {

    res.json({message: "Chegou até aqui"})
})

module.exports = router