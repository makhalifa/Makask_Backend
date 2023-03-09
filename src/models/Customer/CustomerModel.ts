import { Schema, model, Types } from 'mongoose'

const customerSchema = new Schema(
    {
        orders: { type: Array<Types.ObjectId>, ref: 'orders' },
        reviews: { type: Array<Types.ObjectId>, ref: 'reviews' },
        size: { type: Types.ObjectId, ref: 'customer_sizes' },
        profile: { type: Types.ObjectId, ref: 'customer_profile' },
        address: { type: Types.ObjectId, ref: 'customer_addresses' },
        card: { type: Types.ObjectId, ref: 'customer_cards' },

        email: { type: String, required: true, unique: true },
        email_verfied: { type: Boolean, default: false },
        password: { type: String, required: true },

        createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
)

const CustomerModel = model('customers', customerSchema)

export default CustomerModel
