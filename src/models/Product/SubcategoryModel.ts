import { now, Schema, Types, model } from 'mongoose'

const SubcategorySchema = new Schema({
    cateogry: { type: Types.ObjectId, ref: 'category', require: true },
    products: { type: Array<Types.ObjectId>, ref: 'products' },
    name: { type: String, require: true },
    createdAt: { type: Date, default: now },
    updatedAt: { type: Date },
})

const SubcategoryModel = model('subcategory', SubcategorySchema)

export default SubcategoryModel