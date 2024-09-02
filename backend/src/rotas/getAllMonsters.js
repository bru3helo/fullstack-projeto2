const express = require("express")
const prismaClient = require("../prisma/client.js")

const router = express.Router()

router.get("/", async (req, res) => {
    
    const allMonsters = await prismaClient.monster.findMany()

    if (!allMonsters){
        res.json({message: "Nada encontrado"})

    } else{

        res.json(allMonsters)
    }

    
})

module.exports = router