import dotenv from "dotenv"
import "reflect-metadata"
import app from './app'
import "./database"

dotenv.config()

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))