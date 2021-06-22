import mysql from 'mysql'
import {config} from "dotenv";
config();

async function pool() {
    return mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 10
    })
}

export default pool