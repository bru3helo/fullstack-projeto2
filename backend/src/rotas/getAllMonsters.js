const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    const id = req.params.id

    res.json({messagem: `${id}`})
})

module.exports = router