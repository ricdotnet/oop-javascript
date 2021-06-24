import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    debug: true
})

export function sendMail(params) {
    transporter.sendMail({
        from: 'Ricardo <me@rrocha.uk>',
        to: 'me@rrocha.uk',
        subject: params[0],
        html: params[1]
    }, (error, info) => {
        // console.log(error || info)
        if(error)
            console.log(error)

    })
}