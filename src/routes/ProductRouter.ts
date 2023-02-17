import express, { Request, Response, Application } from 'express'
import ProductController from '../controller/ProductController'

const router = express.Router()

router.get('/', ProductController.getProducts)
router.post('/', ProductController.createProduct)
router.get('/category/:category', ProductController.getProductsByCategory)
router.get('/sub_category/:sub_category', ProductController.getProductsBySubCategory)
router.get('/category/:category/sub_category/:sub_category', ProductController.getProductsByCategoryAndSubCategory)
router.get('/filter', ProductController.filterProducts)
router.get('/best_seller', ProductController.getBestSeller)
// router.get('/best_deal', ProductController.getBestDeal)
// router.get('/new_arrival', ProductController.getNewArrival)
router.put('/:id', ProductController.updateProduct)
router.get('/:id', ProductController.getProductsById)
// router.get('/:id/reviews', ProductController.getReviews)
router.delete('/:id', ProductController.deleteProduct)

export default router
