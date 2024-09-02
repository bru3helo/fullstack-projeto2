const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
//const fs = require("fs")
const path = require("path")
//const https = require("https")
require("dotenv").config()

const getOneMonster = require("./src/rotas/getOneMonster.js")
const getAllMonsters = require("./src/rotas/getAllMonsters.js")
const userRouter = require('./src/rotas/userRouter.js')
const addMonster = require('./src/rotas/addNewMonster.js')

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

//const options = {
//    key: fs.readFileSync(path.join(__dirname, 'server.key')),
//    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
//  };

app.use('/getOneMonster', getOneMonster)
app.use("/getAllMonsters", getAllMonsters)
app.use("/user", userRouter)
app.use('/monster', addMonster)

//{}

app.listen(PORT, () => {
    console.log(`Funcionando na rota ${PORT}`)
})

//https.createServer(options, app).listen(2020, () => {
//    console.log("Funcionando...")
//})