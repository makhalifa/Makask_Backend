import { Schema, model, Types } from 'mongoose'

const OrderStatusSchema = new Schema(
    {
        _id: { type: String, default: Types.ObjectId },
        name: { type: String, required: true },
    },
    { versionKey: false }
)

const OrderStatusModel = model('order_status', OrderStatusSchema)

export default OrderStatusModel
