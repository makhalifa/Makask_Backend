import { Schema, model, Types } from 'mongoose'

const address = new Schema(
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

const customerAddressesSchema = new Schema(
    {
        customer: { type: Types.ObjectId, ref: 'customers' },
        address: { type: [address], required: true },
    },
    {
        versionKey: false,
    }
)

const CustomerAddressesModel = model('customer_addresses', customerAddressesSchema)

export default CustomerAddressesModel