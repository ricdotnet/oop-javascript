import express from "express";
const routes = express.Router()

import user from './controllers/UserController.js'

routes.use((req, res, next) => {
    next()
})

routes.use('/user', user)

export default routes