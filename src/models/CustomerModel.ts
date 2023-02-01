import { Schema, model } from 'mongoose'

const customerSchema = new Schema(
    {
        _id: { type: String, required: true },
        email: { type: String, required: true },
    },
    { versionKey: false }
)

const Customer = model('Customers', customerSchema)

export default Customer
