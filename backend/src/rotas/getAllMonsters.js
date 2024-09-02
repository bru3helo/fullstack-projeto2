const express = require("express")
const prismaClient = require("../prisma/client.js")
const {authenticate} = require("../middleware/Auth.js")
const {clientRedis} = require("../redis/client-redis.js")

const router = express.Router()

router.get("/", authenticate, async (req, res) => {
    
    const postagem = await clientRedis.get("monsters")

    //Cache
    if (postagem) {
        return res.status(200).json(JSON.parse(postagem));
    }

    const allMonsters = await prismaClient.monster.findMany({
        select: {
            id: true,
            name: true
        }
    })

    if (!allMonsters){
        res.json({message: "Nada encontrado"})

    } else{
        await clientRedis.set("monsters", JSON.stringify(allMonsters))
        res.json(allMonsters)
    }

    
})

module.exports = router