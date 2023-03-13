import { Schema, Types, model } from 'mongoose';

const reviewSchema = new Schema({
    _id: { type: String, required: true },
    product_id: { type: Types.ObjectId, ref: 'products' },
    customer_id: { type: Types.ObjectId, ref: 'customers' },
    rating: { type: Number, required: true , min: 1, max: 5},
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const ReviewModel = model('reviews', reviewSchema);

export default ReviewModel;