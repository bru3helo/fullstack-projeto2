const express = require("express")
const {createNewUser} = require("./controls/createUserAPI.js")

const router = express.Router()

//Criar usuario
router.post('/create', async (req, res) => {

    try{

        const {user, password} = req.body
        const createUser = await createNewUser({user, password})

        res.json({ message: "Usuário cadastrado.", createUser });

    } catch (err){

        console.error(err)
        res.status(500).json({message: "Problemas internos"})

    }
    
})

module.exports = router