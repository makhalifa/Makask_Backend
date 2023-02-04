import express, { Router, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import CustomerRouter from './CustomerRouter'
import ProductRouter from './ProductRouter'

dotenv.config()

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.json('Hello from Router!')
})

// routes
router.use('/customer', CustomerRouter)
router.use('/product', ProductRouter)

export default router
