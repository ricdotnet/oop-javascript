import express from 'express'
import bodyParser from "body-parser";
import pool from "./database/mysql.js";
import { transporter } from "./mail/mailer.js";

import {config} from "dotenv";
config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import routes from './routes.js'
app.use('/', routes)

async function init() {
    transporter.verify((error, success) => {
        if(error) {
            console.log(error)
        } else {
            console.log('server is ready to send emails.')
        }
    })

    const connection = await pool();

    connection.getConnection((error) => {
        if(error) throw error;

        console.log('Connected to db...')
        app.listen(process.env.SERVER_PORT, () => {
            console.log('server on... port: ' + process.env.SERVER_PORT)
        })
    })
}

init().then()