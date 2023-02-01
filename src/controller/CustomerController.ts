import Customer from '../models/CustomerModel'
import { faker } from '@faker-js/faker'

import { Request, Response } from 'express'

const getCustomers = async (req: Request, res: Response) => {
    const customers = await Customer.find()
    res.json(customers)
}

const createCustomer = async (req: Request, res: Response) => {
    const { name, email } = req.body
    const newCustomer = new Customer({ name, email })
    const customerSaved = await newCustomer.save()
    res.json(customerSaved)
}

const randomCustomer = async (req: Request, res: Response) => {
    for (let i = 0; i < 10; i++) {
        const customer = {
            _id: faker.name.firstName() + faker.name.lastName(),
            email: faker.internet.email(),
        }
        const newCustomer = new Customer(customer)
        await newCustomer.save()
    }
    res.json({ message: '10 customers created' })
}

export default { getCustomers, createCustomer, randomCustomer }
