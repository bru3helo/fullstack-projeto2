const express = require("express")
const {authenticate} = require("../middleware/Auth.js")
const {newMonster} = require("./controls/addMonsterAPI.js")
const {clientRedis} = require("../redis/client-redis.js")

const router = express.Router()

router.post("/add", authenticate, async (req, res) => {

    const {name, type, size, languages, alignment} = req.body

    const monster = await newMonster({name, type, size, languages, alignment})

    await clientRedis.del("monsters")
    res.json(monster)
    
})

module.exports = router