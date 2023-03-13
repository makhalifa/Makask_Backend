import { now, Schema, Types, model } from 'mongoose'

const CategorySchema = new Schema({
    _id: { type: String, required: true },
    products: { type: Array<Types.ObjectId>, ref: 'products' },
    name: { type: String, require: true },
    createdAt: { type: Date, default: now },
    updatedAt: { type: Date },
})

const CategoryModel = model('category', CategorySchema)

export default CategoryModel
