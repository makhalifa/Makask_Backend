import { Schema, Types, model } from 'mongoose'

const CustomerProfile = new Schema(
    {
        _id: { type: String, required: true, unique: true },
        customer: { type: Types.ObjectId, ref: 'customers' },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        profile_picture: { type: String },
        phone: { type: [String], required: true },
        gender: { type: String, required: true, enum: ['male', 'female'] },
        birthdate: { type: Date, required: true },
    },
    {
        versionKey: false,
    }
)

const CustomerProfileModel = model('customer_profile', CustomerProfile)

export default CustomerProfileModel
