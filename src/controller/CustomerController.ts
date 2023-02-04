import { Request, Response } from 'express'
import Customer from '../models/CustomerModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { sendMail } from '../services/mailer'

dotenv.config()
const {
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    JWT_VERIFICATION_CODE,
    JWT_VERFICATION_CODE_EXPIRES_IN,
    COMPANY_NAME,
    BASE_URL,
} = process.env
const pepper = BCRYPT_PASSWORD as string
const salt = parseInt(SALT_ROUNDS as string)

const getCustomers = async (_req: Request, res: Response) => {
    const customers = await Customer.find()
    res.json(customers)
}

const getCustomerById = async (req: Request, res: Response) => {
    try {
        const customer = await Customer.find({ _id: req.params.id })
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' })
        }
        res.json(customer)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

const createCustomer = async (req: Request, res: Response) => {
    try {
        const customer = new Customer(req.body)
        customer._id = req.body._id.toLowerCase()

        const hash = bcrypt.hashSync(customer.password + pepper, salt)
        customer.password = hash
        const newCustomer = await customer.save()
        // TODO return token
        const token = jwt.sign({ customer: newCustomer }, JWT_SECRET as string, {
            expiresIn: JWT_EXPIRES_IN,
        })
        // TODO send verification email to customer
        const verificationToken = jwt.sign(
            { customer: newCustomer },
            JWT_VERIFICATION_CODE as string,
            {
                expiresIn: JWT_VERFICATION_CODE_EXPIRES_IN,
            }
        )
        await sendMail(newCustomer.email, 'Verify your email', verificationMsg(verificationToken))
        res.status(201).json(token)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error })
    }
}
const verificationMsg = (token: string) => `
    <h1>Verify your email</h1>
    <p>Click on the link below to verify your email</p>
    <a href="${BASE_URL}/customer/verify/${token}">Verify</a>
`

const verifyCustomer = async (req: Request, res: Response) => {
    try {
        const { token } = req.params
        const decoded = jwt.verify(token, JWT_VERIFICATION_CODE as string) as any
        const customer = (await Customer.findOne({ _id: decoded.customer._id })) as any
        console.log(customer)
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' })
        }
        if (customer.emailVerified) {
            res.status(400).json({ message: 'Customer already verified' })
        }
        customer.emailVerified = true
        await customer.save()
        res.json({ message: 'Customer verified' })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
}

const autheticateCustomer = async (req: Request, res: Response) => {
    try {
        const { _id, password } = req.body
        const customer = await Customer.findOne({ _id }) as any
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' })
        }
        if (!bcrypt.compareSync(password + pepper, customer.password)) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        if (!customer.emailVerified) {
            return res.status(401).json({ message: 'Email not verified' })
        }
        const token = jwt.sign({ customer }, JWT_SECRET as string, {
            expiresIn: JWT_EXPIRES_IN,
        })
        res.json(token)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error })
    }
}

export default {
    getCustomers,
    createCustomer,
    autheticateCustomer,
    getCustomerById,
    verifyCustomer,
}
