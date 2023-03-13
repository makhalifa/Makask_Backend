import { Schema, model, Types } from 'mongoose'

const statusHistorySchema = new Schema({
    _id: { type: String, default: Types.ObjectId },
    order: { type: Types.ObjectId, ref: 'orders' },
    history: [
        {
            status: { type: Types.ObjectId, ref: 'order_status' },
            date: { type: Date, default: Date.now },
        },
        {
            versionKey: false,
            _id: false,
        },
    ],
})

const StatusHistoryModel = model('status_history', statusHistorySchema)

export default StatusHistoryModel
