import dotenv from "dotenv"
import "reflect-metadata"
import express from "express"
import "./database"

const app = express()

dotenv.config()

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))