import { Schema,Types, model } from 'mongoose'

const logSchema = new Schema({
    _id: { type: String, default: Types.ObjectId },
    level: { type: String, required: true, enum: ['error', 'warn', 'info'] },
    timestamp: { type: Date, required: true },
    message: { type: String, required: true },
    user_id: { type: String },
    ip_address: { type: String },
    error_message: { type: String },
    error_code: { type: String },
})

// Create index on the level, timestamp, error_code
logSchema.index({ level: 1, timestamp: 1, error_code: 1 })

// Create the TTL index on the timestamp field
logSchema.index({ timestamp: 1 }, { expireAfterSeconds: 86400 })

const LogModel = model('logs', logSchema)

export default LogModel
