const express = require("express")
const prismaClient = require("../prisma/client.js")
const {authenticate} = require("../middleware/Auth.js")

const router = express.Router()

router.get("/:id", authenticate, async (req, res) => {
    
    const id = req.params.id

    const findMonster = await prismaClient.monster.findFirst({
        where:{
            id: id
        }
    })

    if (findMonster){   

        res.json(findMonster)   
    } else {

        res.json({message: "Não encontrado"})
    }

    
})

module.exports = router