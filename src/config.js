import {config} from "dotenv"

config()
// Test para base de datos - NO FUNCIONAL
// Arreglar ahora con moongose porque esto es para SQL
export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || ''
}