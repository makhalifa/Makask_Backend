import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const {MAILER_SERVICE, MAILER_USER,MAILER_PASSWORD } = process.env

const transporter = nodemailer.createTransport({
    service: MAILER_SERVICE as string,
    auth: {
        user: MAILER_USER,
        pass: MAILER_PASSWORD,
    },
})

export const sendMail = async (to: string, subject: string, html: string) => {
    await transporter.sendMail(
        {
            from: MAILER_USER,
            to,
            subject,
            html,
        },
        (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
            }
        }
    )
}
