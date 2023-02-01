import express, { Request, Response, Application } from 'express'
import CustomterController from '../controller/CustomerController'

const router: Application = express()

router.get('/', CustomterController.getCustomers)
router.post('/', CustomterController.createCustomer)
router.get('/random', CustomterController.randomCustomer)

export default router
