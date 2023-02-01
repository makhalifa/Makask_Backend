import { Schema, model, Types } from 'mongoose'

const productSchema = new Schema(
    {
        // _id: { type: String, required: true, unique: true },
        // sellerid: { type: Types.ObjectId, required: true, ref: 'sellers' },

        title: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        sub_category: { type: String, required: true },
        // description: { type: String },

        stock: { type: Number },
        // available_colors: { type: Array },
        // available_sizes: { type: Array },

        brand: { type: String },
        // reviews: { type: Array<Types.ObjectId>, ref: 'reviews' },

        images: { type: Array<String> },
        // prova_images: { type: Array },

        created_at: { type: Date, default: Date.now },
    },
    { versionKey: false }
)

const Product = model('Products', productSchema)

export default Product
