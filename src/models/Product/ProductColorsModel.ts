import { now, Schema, Types, model } from 'mongoose'


const ProductColorsSchema = new Schema({
    product: { type: Types.ObjectId, ref: 'products' },
    color: { type: Array<Types.ObjectId>, ref: 'product_colors' },
    product_sizes: { type: Array<Types.ObjectId>, ref: 'product_sizes' },
    images: { type: Array<String>, ref: 'product_images' },
    subtotal_price: { type: Number, required: true },
    discount_amount: { type: Number, default: 0 },
    total_price: { type: Number, required: true },
    createdAt: { type: Date, default: now },
    updatedAt: { type: Date },
})
const ProductColorsModel = model('product_colors', ProductColorsSchema)

export default ProductColorsModel