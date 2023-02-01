import express, { Request, Response, Application } from 'express'
import ProductController from '../controller/ProductController'

const router = express.Router()

router.get('/', ProductController.getProducts)
router.post('/', ProductController.createProduct)
// router.get('/random', ProductController.randomProduct)
router.get('/search', ProductController.getProductsBySearch)
router.get('/category/:category', ProductController.getProductsByCategory)
router.get('/sub_category/:sub_category', ProductController.getProductsBySubCategory)
router.get('/category/:category/sub_category/:sub_category', ProductController.getProductsByCategoryAndSubCategory)
router.get('/filter', ProductController.filterProducts)
router.put('/:id', ProductController.updateProduct)
router.get('/:id', ProductController.getProductsById)
router.delete('/:id', ProductController.deleteProduct)

export default router
