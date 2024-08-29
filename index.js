import express from "express"
import cors from "cors"

import getRouter from "./src/rotas/getRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", getRouter)

//{}

app.listen(2020, () => {
    console.log("Funcionando...")
})