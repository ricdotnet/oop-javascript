import imaps from 'imap-simple'

import dotenv from 'dotenv'

dotenv.config()

let config = {
    imap: {
        user: process.env.IMAP_USER,
        password: process.env.IMAP_PASS,
        host: process.env.IMAP_HOST,
        port: 993,
        tls: true,
        authTimeout: 3000
    },
    onmail: function (numNewMail) {
        console.log(numNewMail)
    }
}

export default async function getMail() {
    let promise = new Promise((resolve, reject) => {
        imaps.connect(config).then((connection) => {
            resolve(userMail(connection))
        })
    })

    return await promise
}

async function userMail(param) {
    let boxes = new Promise((resolve, reject) => {
        param.getBoxes((err, res) => {
            if (err) return console.log(err)

            resolve(res)
        })
    })

    return await boxes
}