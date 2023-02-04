import express, { Router } from 'express'
import CustomterController from '../controller/CustomerController'
import { CustomerAuth } from '../middlewares/CustomerAuthMiddleware'

const router: Router = express.Router()

router.get('/', CustomterController.getCustomers)
router.post('/' , CustomterController.createCustomer)
router.post('/auth', CustomterController.autheticateCustomer)
// router.put('/:id', CustomterController.updateCustomer)
// router.delete('/:id', CustomterController.deleteCustomer)
router.get('/verify/:token',  CustomterController.verifyCustomer)
router.get('/:id',CustomterController.getCustomerById)
export default router
