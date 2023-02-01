import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS as string, {
            // autoIndex: false, // Don't build indexes
            // maxPoolSize: 10, // Maintain up to 10 socket connections
            // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            // family: 4, // Use IPv4, skip trying IPv6
        })
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

export default connectDB
