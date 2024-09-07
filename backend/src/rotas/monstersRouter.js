const express = require("express")
const {authenticate} = require("../middleware/Auth.js")
const {newMonster} = require("./controls/addMonsterAPI.js")
//const redis = require("../middleware/redis.js") 
const prismaClient = require("../prisma/client.js")

const router = express.Router()


//redis.redis_client,

//criar um novo monstro
router.post("/", authenticate, async (req, res) => {

    const {name, type, size, languages, alignment} = req.body

    const monster = await newMonster({name, type, size, languages, alignment})

    //await cliente.del(`monsters-${req.id}`)
    res.json(monster)
    
})

//resgatar todos os monstros
router.get("/", authenticate, async (req, res) => {
    
    //const postagem = await clientRedis.get(`monsters-${req.id}`)

    //Cache
    //if (postagem) {
    //    return res.status(200).json(JSON.parse(postagem));
    //}

    const allMonsters = await prismaClient.monster.findMany({
        select: {
            id: true,
            name: true
        }
    })

    if (!allMonsters){
        res.json({message: "Nada encontrado"})

    } else{
        //await clientRedis.set(`monsters-${req.id}`, JSON.stringify(allMonsters))
        res.json(allMonsters)
    }

    
})

//resgatar monstro especifico
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