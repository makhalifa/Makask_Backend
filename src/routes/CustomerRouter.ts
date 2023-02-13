import express, { Router } from 'express'
import CustomterController from '../controller/CustomerController'
import { CustomerAuth } from '../middlewares/CustomerAuthMiddleware'

const router: Router = express.Router()
router.get('/', CustomterController.getCustomers)
router.post('/', CustomterController.createCustomer)
router.post('/auth', CustomterController.autheticateCustomer)
// router.put('/:id', CustomterController.updateCustomer)
// router.delete('/:id', CustomterController.deleteCustomer)
router.get('/verify/:token', CustomterController.verifyCustomer)
router.get('/:id', CustomterController.getCustomerById)
export default router

/**
 * @openapi
 * /api/customer:
 *  get:
 *      summary: Get all customers
 *      tags: [Customer]
 *      responses:
 *          200:
 *              description: The list of the customers
 *          500:
 *              description: Internal Server Error
 *  post:
 *    summary: Create a new customer
 *    tags:
 *      - Customer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: The customer was successfully created
 *      500:
 *        description: Internal Server Error
 * /api/customer/{id}:
 *  get:
 *      summary: Get customer by id
 *      tags: [Customer]
 *      responses:
 *          200:
 *              description: The customer
 *          404:
 *              description: Customer not found
 *          500:
 *              description: Internal Server Error
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: string
 *        required: true
 *        description: The customer id
 * 
 * /api/customer/auth:
 *  post:
 *    summary: Customer login
 *    tags:
 *      - Customer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: The customer was successfully authenticated
 *      500:
 *        description: Internal Server Error
 * 
 *
 * /api/customer/verify/{token}:
 *  get:
 *    summary: Verify customer
 *    tags:
 *      - Customer
 *    responses:
 *      200:
 *        description: The customer was successfully verified
 *      500:
 *        description: Internal Server Error
 *    parameters:
 *      - in: path
 *        name: token
 *        schema:
 *          type: string
 *          required: true
 *        description: The customer token
 * 
 * 
 */
