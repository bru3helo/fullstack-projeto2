const express = require('express');
const router = express.Router();
const prismaClient = require("../../prisma/client.js")

router.post('/', async (req, res) => {
    const monsters = [
        { name: 'Goblin', type: 'creature', health: 30 },
        { name: 'Orc', type: 'creature', health: 80 },
        { name: 'Dragon', type: 'mythical', health: 300 },
        // Adicione mais monstros conforme necessário
    ];

    try {
        const createdMonsters = await prisma.monster.createMany({
            data: monsters,
        });
        res.status(201).json({ message: 'Monstros adicionados com sucesso!', data: createdMonsters });
    } catch (err) {
        console.error('Erro ao adicionar monstros:', err);
        res.status(500).json({ message: 'Erro ao adicionar monstros.' });
    }
});

module.exports = router;