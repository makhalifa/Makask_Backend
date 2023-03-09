import { now, Schema, Types, model } from 'mongoose'

const ProductSizesSchema = new Schema(
    {
        product: { type: Types.ObjectId, ref: 'products' },
        product_color: { type: Types.ObjectId, ref: 'product_colors' },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        createdAt: { type: Date, default: now },
        updatedAt: { type: Date },
    },
    { versionKey: false }
)

const ProductSizesModel = model('product_sizes', ProductSizesSchema)

export default ProductSizesModel
