import { Schema, Types, model } from 'mongoose'

const stockSchema = new Schema({
    _id: { type: String, default: Types.ObjectId },
    product: { type: Types.ObjectId, ref: 'products' },
    product_colors: { type: Array<Types.ObjectId>, ref: 'product_colors' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
})

const StockModel = model('stock', stockSchema)

export default StockModel
