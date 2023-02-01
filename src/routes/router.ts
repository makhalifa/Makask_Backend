import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import CustomerRouter from './CustomerRouter'
import ProductRouter from './ProductRouter'

dotenv.config()

const router: Application = express()

// routes
router.get('/', (req: Request, res: Response) => {
    res.json('Hello from Router!')
})
router.use('/customer', CustomerRouter)
router.use('/product', ProductRouter)

export default router
