import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"
import https from "https"

import getRouter from "./src/rotas/getRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

const options = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  };

app.use("/", getRouter)

//{}

https.createServer(options, app).listen(2020, () => {
    console.log("Funcionando...")
})