import { Schema, model, Types } from 'mongoose'

const CartSchema = new Schema({
    customer: { type: Types.ObjectId, ref: 'customers' },
    items: { type: Array<Types.ObjectId>, ref: 'cart_items' },
    subtotal_price: { type: Number, required: true },
    discount_amount: { type: Number, default: 0 },
    total_price: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now}
})

const CartModel = model('cart', CartSchema)

export default CartModel
