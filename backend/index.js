const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
//const fs = require("fs")
const path = require("path")
//const https = require("https")
require("dotenv").config()
const compression = require("compression")
const {rateLimit}  = require("express-rate-limit")
const xss = require("xss-clean")

const getOneMonster = require("./src/rotas/getOneMonster.js")
const getAllMonsters = require("./src/rotas/getAllMonsters.js")
const userRouter = require('./src/rotas/userRouter.js')
const addMonster = require('./src/rotas/addNewMonster.js')
const createManyMonsters = require("./src/rotas/createManyMonsters.js")

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(compression())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Muitas requisições feitas, vai beber uma àgua e volta daqui a pouco."
  })
);
app.use(xss())

//const options = {
//    key: fs.readFileSync(path.join(__dirname, 'server.key')),
//    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
//  };

app.use('/monsters', getOneMonster)
app.use("/monsters", getAllMonsters)
app.use("/user", userRouter)
app.use('/monsters', addMonster)
app.use('/createMonsters', createManyMonsters)
//{}

app.listen(PORT, () => {
    console.log(`Funcionando na rota ${PORT}`)
})

//https.createServer(options, app).listen(2020, () => {
//    console.log("Funcionando...")
//})

//Falta o HTTPS e OpenSSL