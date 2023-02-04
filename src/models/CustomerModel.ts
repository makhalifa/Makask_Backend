import { Schema, model, Types } from 'mongoose'
import utilsModels from './utilsModels'

const customerSchema = new Schema(
    {
        _id: { type: String, required: true },
        purchases: { type: Array<Types.ObjectId>, ref: 'purchases' },
        orders: { type: Array<Types.ObjectId>, ref: 'orders' },
        reviews: { type: Array<Types.ObjectId>, ref: 'reviews' },
        history: { type: Array<Types.ObjectId>, ref: 'history' },

        // username: { type: String, required: true },
        password: { type: String, required: true },

        fisrtname: { type: String, required: true },
        lastname: { type: String, required: true },
        profilePicture: String,
        phone: [{ type: String, required: true }],
        address: utilsModels.addressSchema,
        gender: { type: Boolean, required: true },
        dateofbirth: { type: Date, required: true },

        emailVerified: { type: Boolean, default: false },

        sizes: { type: utilsModels.customerSizesSchema, required: false },

        paymentMethods: { type: utilsModels.paymentMethodSchema, required: false },

        createdAt: { type: Date, default: Date.now },
        deletedAt: Date,
    },
    { versionKey: false }
)

const Customer = model('Customers', customerSchema)

export default Customer
