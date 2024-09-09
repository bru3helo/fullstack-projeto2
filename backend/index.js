const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors") //
const fs = require("fs")
const https = require("https") //
require("dotenv").config()
const compression = require("compression") //
const {rateLimit}  = require("express-rate-limit") //
const xss = require("xss-clean") //

const privateKey = fs.readFileSync('./private-key.pem', 'utf8');
const certificado = fs.readFileSync('./certificate.pem', 'utf8');
const credenciais = { key: privateKey, cert: certificado };

const userRouter = require('./src/rotas/userRouter.js')
const monsterRouter = require('./src/rotas/monstersRouter.js')
const installRouter = require("./src/rotas/installMonsters.js")

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())
app.use(compression())
app.use(xss())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Muitas requisições feitas, vai beber uma àgua e volta daqui a pouco."
  })
);

app.use("/user", userRouter)
app.use('/monsters', monsterRouter)
app.use('/install', installRouter)

app.listen(PORT, () => {
    console.log(`Funcionando na rota ${PORT}`)
})

/*https.createServer(credenciais, app).listen(2020, () => {
    console.log("Funcionando...")
}) */