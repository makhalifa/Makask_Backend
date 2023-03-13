import { now, Schema, Types, model } from 'mongoose'

const ColorsSchema = new Schema({
    _id: { type: String, default: Types.ObjectId },
    product: { type: Types.ObjectId, ref: 'products' },

    color: { type: String, required: true },
    hex: { type: String, required: true },
    createdAt: { type: Date, default: now },
    updatedAt: { type: Date },
})

const ColorsModel = model('product_colors', ColorsSchema)

export default ColorsModel
