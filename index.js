import express from 'express'
import http from 'http'
import bodyParser from "body-parser";
import pool from "./database/mysql.js";

import {config} from "dotenv";
config();

const app = express();
const server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import routes from './routes.js'
app.use('/', routes)

pool.getConnection((error) => {
    if(error) throw error;

    console.log('Connected to db...')
    server.listen(process.env.SERVER_PORT, () => {
        console.log('Server running on port ' + process.env.SERVER_PORT)
    })
})