import { Schema, model, Types } from 'mongoose'

const OrderSchema = new Schema({
    _id: { type: String, default: Types.ObjectId },
    customer: { type: Types.ObjectId, ref: 'customers' },
    items: { type: [Types.ObjectId], ref: 'order_items' },
    shipping: { type: Types.ObjectId, ref: 'shipping' },
    payment: { type: Types.ObjectId, ref: 'payment' },
    status: { type: Types.ObjectId, ref: 'order_status' },
    history_status: { type: [Types.ObjectId], ref: 'order_status' },
    subtotal: { type: Number, required: true },
    discount_amount: { type: Number, default: 0 },
    total_price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const OrderModel = model('orders', OrderSchema)

export default OrderModel
