import { Schema, model, Types } from 'mongoose'

// Product Schema
const productSchema = new Schema(
    {
        _id: { type: String, required: true },
        seller: { type: Types.ObjectId, ref: 'sellers' },
        reviews: { type: Array<Types.ObjectId>, ref: 'reviews' },
        category: { type: Types.ObjectId, ref: 'category' },
        subcategory: { type: Types.ObjectId, ref: 'subcategory' },
        stock: { type: Types.ObjectId, required: true, ref: 'stock' },

        title: { type: String, required: true },
        description: { type: String, required: true },

        subtotla_price: { type: Number, required: true },
        discount_amount: { type: Number, default: 0 },
        total_price: { type: Number, required: true },

        freeShipping: { type: Boolean, required: true },

        thumbnail: { type: String, required: true },
        sold: { type: Number, required: true },

        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
)

const Product = model('products', productSchema)

export default Product
