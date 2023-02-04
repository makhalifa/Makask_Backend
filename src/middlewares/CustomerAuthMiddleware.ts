import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET } = process.env

export const CustomerAuth = async (req: any, res: Response, next: any) => {
    // const token = req.header('x-auth-token')
    const authorizationHeader = req.header('Authorization')
    const token = authorizationHeader && authorizationHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' })
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET as string) as any
        req.customer = decoded.customer
        next()
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' })
    }
}