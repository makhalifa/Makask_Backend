import { Schema, model, Types } from 'mongoose'

const CustomerSchema = new Schema(
    {
        _id: { type: String, required: true },
        orders: { type: Array<Types.ObjectId>, ref: 'orders' },
        reviews: { type: Array<Types.ObjectId>, ref: 'reviews' },
        size: { type: Types.ObjectId, ref: 'customer_sizes' },
        profile: { type: Types.ObjectId, ref: 'customer_profile' },
        address: { type: Types.ObjectId, ref: 'customer_addresses' },
        card: { type: Types.ObjectId, ref: 'customer_cards' },

        email: { type: String, required: true },
        email_verfied: { type: Boolean, default: false },
        password: { type: String, required: true },

        createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false, timestamps: true }
)

CustomerSchema.index({ email: 1 })

const CustomerModel = model('customers', CustomerSchema)

export default CustomerModel
