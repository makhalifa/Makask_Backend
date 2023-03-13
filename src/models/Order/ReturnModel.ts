import { Schema, Types, model, Model } from 'mongoose'

const ReturnSchema = new Schema({
    _id: { type: String, required: true },
    order: { type: Types.ObjectId, ref: 'orders' },
    customer: {type: Types.ObjectId,ref:'customers'},
    order_item: { type: Types.ObjectId, ref: 'order_items' },
    request_status: { type: String, require: true, enum: ['Pending', 'Accepted', 'Refused'] },
    res_date: { type: Date },
    created_at: { type: Date, default: Date.now()},
})


const ReturnModel = new Model('returns', ReturnSchema)

export default ReturnModel