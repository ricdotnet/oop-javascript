import express from 'express'
import http from 'http'
import bodyParser from "body-parser";
import pool from "./database/mysql.js";

import {config} from "dotenv";
config();

const app = express();
// const server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import routes from './routes.js'
app.use('/', routes)

async function init() {
    const connection = await pool();

    connection.getConnection((error) => {
        if(error) throw error;

        console.log('Connected to db...')
        app.listen(process.env.SERVER_PORT, () => {
            console.log('server on... port: ' + process.env.SERVER_PORT)
        })
    })
}

init()