const express = require("express")
const {authenticate} = require("../middleware/Auth.js")
const {newMonster} = require("./controls/addMonsterAPI.js")
//const redis = require("../middleware/redis.js") 
const prismaClient = require("../prisma/client.js")
const logger = require('../../logger.js');

const router = express.Router()


//redis.redis_client,

//criar um novo monstro
router.post("/", authenticate, async (req, res) => {

    try {
        const { name, type, size, languages, alignment } = req.body;

        const monster = await newMonster({ name, type, size, languages, alignment });
        
        // Log de sucesso
        logger.info(`Monstro criado com sucesso: ${name}, Tipo: ${type}`);

        // Cache: await cliente.del(`monsters-${req.id}`);
        res.json(monster);
    } catch (error) {
        logger.error(`Erro ao criar monstro: ${error.message}`);
        res.status(500).json({ message: "Erro ao criar o monstro." });
    }
});

//resgatar todos os monstros
router.get("/", authenticate, async (req, res) => {
    
    try {
        // const postagem = await clientRedis.get(`monsters-${req.id}`);

        // Cache
        // if (postagem) {
        //     logger.info("Monstros recuperados do cache.");
        //     return res.status(200).json(JSON.parse(postagem));
        // }

        const allMonsters = await prismaClient.monster.findMany({
            select: {
                id: true,
                name: true
            }
        });

        if (!allMonsters) {
            logger.warn("Nenhum monstro encontrado.");
            return res.json({ message: "Nada encontrado" });
        } else {
            // Cache: await clientRedis.set(`monsters-${req.id}`, JSON.stringify(allMonsters));
            logger.info("Todos os monstros recuperados com sucesso.");
            res.json(allMonsters);
        }
    } catch (error) {
        logger.error(`Erro ao recuperar monstros: ${error.message}`);
        res.status(500).json({ message: "Erro ao recuperar os monstros." });
    }
});

//resgatar monstro especifico
router.get("/:id", authenticate, async (req, res) => {
    
    try {
        const id = req.params.id;

        const findMonster = await prismaClient.monster.findFirst({
            where: {
                id: id
            }
        });

        if (findMonster) {
            logger.info(`Monstro encontrado: ID ${id}`);
            res.json(findMonster);
        } else {
            logger.warn(`Monstro não encontrado: ID ${id}`);
            res.json({ message: "Não encontrado" });
        }
    } catch (error) {
        logger.error(`Erro ao recuperar monstro com ID ${id}: ${error.message}`);
        res.status(500).json({ message: "Erro ao recuperar o monstro." });
    }
});

module.exports = router