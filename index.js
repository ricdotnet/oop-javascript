import express from 'express'
import http from 'http'
import bodyParser from "body-parser";

const app = express();
const server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import routes from './routes.js'
app.use('/', routes)

server.listen(3000, () => {
    console.log('server running on port 3000')
})