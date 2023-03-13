import { Schema, model, Types } from 'mongoose'

const OrderItemsSchema = new Schema({
    _id: { type: String, required: true },
    product: { type: Types.ObjectId, ref: 'products' },
    stock: { type: Types.ObjectId, ref: 'stock' },
    product_color: { type: Types.ObjectId, ref: 'product_colors' },
    product_size: { type: Types.ObjectId, ref: 'product_sizes' },
    quantity: { type: Number, required: true },
    subtotal_price: { type: Number, required: true },
    discount_amount: { type: Number, default: 0 },
    total_price: { type: Number, required: true },
})

const OrderItemsModel = model('order_items', OrderItemsSchema)

export default OrderItemsModel
