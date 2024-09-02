const express = require("express")
const prismaClient = require("../prisma/client.js")
const {authenticate} = require("../middleware/Auth.js")

const router = express.Router()

router.get("/", authenticate, async (req, res) => {
    
    const allMonsters = await prismaClient.monster.findMany({
        select: {
            id: true,
            name: true
        }
    })

    if (!allMonsters){
        res.json({message: "Nada encontrado"})

    } else{

        res.json(allMonsters)
    }

    
})

module.exports = router