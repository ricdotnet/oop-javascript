import express from "express";
import userStore from "../stores/users.js";
import User from '../User.js'
const user = express.Router()

// import executeQuery from "../database/mysqlHelper.js";
import executeQuery from "../database/mysqlHelper.js";

import { sendMail } from "../mail/mailer.js";

export default user

user.post('/new', addUser, (req, res) => {
    userStore.users.push(new User(req.newUser))

    res.sendStatus(200)
})

user.get('/all', getUsers, (req, res) => {
    res.status(200).send(req.allUsers)
})

user.get('/:name', getUser, (req, res) => {

})

// functions below

//function to add a user
function addUser(req, res, next) {

    if (!req.body)
        return res.status(400).send({
            message: 'no body was set'
        })

    const firstname = req.body.firstname;
    if (!firstname) return res.status(400).send({message: 'no firstname was set'})

    const surname = req.body.surname;
    if (!surname) return res.status(400).send({message: 'no surname was set'})

    const age = req.body.age;
    if (!age) return res.status(400).send({message: 'no age was set'})

    req.newUser = {
        firstname: firstname,
        surname: surname,
        age: age
    }

    let sql = 'insert into usersoop values (null, ?, ?, ?)'
    let params = [firstname, surname, age]
    executeQuery(sql, params).then()

    let mailSubject = 'Test email.....'
    let mailBody = `Hello ${firstname} \n
    Welcome to this website. I hope you have fun.`
    sendMail([mailSubject, mailBody])

    next()
}

//function to get all users
function getUsers(req, res, next) {

    if(!userStore.users.length > 0)
        return res.status(200).send({ message: 'no users in the list' })

    req.allUsers = userStore.users;

    next()
}

//function to get specific user
function getUser(req, res, next) {

    let result = []
    for(let el in userStore.users) {
        let user = userStore.users[el]
        if(user.firstname === req.params.name) {
            result.push(user)
        }
    }

    if(!result.length > 0)
        return res.status(200).send({ message: 'no users with that name' })

    return res.status(200).send(result)
}