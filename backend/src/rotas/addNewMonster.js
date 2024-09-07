const express = require("express")
const {authenticate} = require("../middleware/Auth.js")
const {newMonster} = require("./controls/addMonsterAPI.js")
const redis = require("../middleware/redis.js") 

const router = express.Router()

router.post("/", redis.redis_client, authenticate, async (req, res) => {

    const {name, type, size, languages, alignment} = req.body

    const monster = await newMonster({name, type, size, languages, alignment})

    await cliente.del(`monsters-${req.id}`)
    res.json(monster)
    
})

module.exports = router