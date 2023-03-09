import { Schema, Types, model } from "mongoose";

// Card Schema
const Card = new Schema(
    {
        customer: { type: Types.ObjectId, ref: 'customers' },
        number: { type: String, required: true },
        name: { type: String, required: true },
        expiry: { type: Date, required: true },
        cvv: { type: String, required: true },
    },
    {
        versionKey: false,
        _id: false
    }
)

// Customer Card Schema
const CustomerCard = new Schema(
    {
        customer: { type: Types.ObjectId, ref: 'customers' },
        card: { type: [Card], required: true },
    },
    {
        versionKey: false,
    }
)

const CustomerCardModel = model('customer_cards', CustomerCard)

export default CustomerCardModel