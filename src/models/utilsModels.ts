import { Schema, Types } from 'mongoose'

const addressSchema = new Schema(
    {
        city: { type: String, required: true },
        country: { type: String, required: true },
        addressLine: { type: String, required: true },
    },
    {
        versionKey: false,
        _id: false
    }
)

const creditCardSchema = new Schema(
    {
        cardNumber: { type: String, required: true },
        cardHolder: { type: String, required: true },
        expirationDate: { type: Date, required: true },
        cvv: { type: String, required: true },
    },
    {
        versionKey: false,
        _id: false
    }
)

const paypalAccountSchema = new Schema(
    {
        accountNumber: { type: String, required: true },
        accountHolder: { type: String, required: true },
    },
    {
        versionKey: false,
        _id: false
    }
)

const paymentMethodSchema = new Schema(
    {
        creditCard: { type: creditCardSchema, required: false },
        paypalAccount: { type: paypalAccountSchema, required: false },
    },
    {
        versionKey: false,
        _id: false
    }
)

const customerSizesSchema = new Schema(
    {
        height: { type: Number, required: true },
        weight: { type: Number, required: true },
        chest: { type: Number, required: true },
        waist: { type: Number, required: true },
        hips: { type: Number, required: true },
    },
    {
        versionKey: false,
        _id: false
    }
)

export default {
    addressSchema,
    paymentMethodSchema,
    customerSizesSchema,
}
