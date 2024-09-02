const express = require("express")
const {createNewUser} = require("./controls/createUserAPI.js")
const {loginUser} = require("./controls/loginUserAPI.js")

const router = express.Router()

//Criar usuario
router.post('/create', async (req, res) => {

    try{

        const {user, password} = req.body
        const createUser = await createNewUser({user, password})

        if (createUser){
            // Remove cookie antigo caso exista
            res.clearCookie('authToken')
            res.json({ message: "Usuário cadastrado.", createUser });
        } else{
            res.status(400).json({message: "Esse usuario já existe."})
        }

    } catch (err){

        console.error(err)
        res.status(500).json({message: "Problemas internos"})

    }
    
})

router.post("/login", async (req, res) => {
    
    const {user, password} = req.body
    const login = await loginUser({user, password})

    
    if (!login){
        return res.status(400).json({message: "Usuário e/ou senha errados."})
    } 

    const token = login
    console.log("token do login", token)

    // Remove cookie antigo caso exista
    res.clearCookie('authToken')
    res.cookie('authToken', token)
    res.json({message: "Logado"})

})

module.exports = router