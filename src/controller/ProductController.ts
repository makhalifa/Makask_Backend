import { Request, Response } from 'express'
import { faker } from '@faker-js/faker'
import Product from '../models/ProductModel'

const getProducts = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 10
        const page = req.query.page ? parseInt(req.query.page as string) : 1
        const products = await Product.find()
            .limit(limit)
            .skip(limit * (page - 1))
        res.json(products)
    } catch (error) {
        res.json(error).status(500)
    }
}

const getProductsById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.json(error).status(500)
    }
}

const createProduct = async (req: Request, res: Response) => {
    const { title, price, category, sub_category } = req.body
    const newProduct = new Product({ title, price, category, sub_category })
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
}

const getProductsByCategory = async (req: Request, res: Response) => {
    const products = await Product.find({ category: req.params.category })
    res.json(products)
}

const getProductsBySubCategory = async (req: Request, res: Response) => {
    const products = await Product.find({ sub_category: req.params.sub_category })
    res.json(products)
}

const getProductsByCategoryAndSubCategory = async (req: Request, res: Response) => {
    const products = await Product.find({
        category: req.params.category,
        sub_category: req.params.sub_category,
    })
    res.json(products)
}

const filterProducts = async (req: Request, res: Response) => {

    /**
     * Filter
     * title: string
     * category: string | string[]
     * subcategory: string | string[]
     * color: string | string[]
     * brand: string | string[]
     * size: string | string[]
     * min_price: number
     * max_price: number
     * 
     * Pagination
     * limit: number
     * page: number
     * 
     * Sort
     * sort: string
     */

    // Filter
    const { title, category, subcategory, color, brand, sort, size } = req.query
    const min_price = parseFloat(req.query.min_price as string)
    const max_price = parseFloat(req.query.max_price as string)

    // Pagination
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10
    const page = req.query.page ? parseInt(req.query.page as string) : 1
    const skip = limit * (page - 1)

    // Sort
    const sortQuery = {} as any
    if (sort) {
        if (sort === 'price_asc') {
            sortQuery['pricing.price'] = 1
        }
        if (sort === 'price_desc') {
            sortQuery['pricing.price'] = -1
        }
    }

    const options = { skip, limit, sort: sortQuery }
    
    const query = {} as any
    if (Object.keys(req.query).length == 0) {
        return res.status(400).json({ message: 'No query' })
    }
    if (title) {
        query.title = { $regex: title, $options: 'i' }
    }
    if (category) {
        if (Array.isArray(category)) {
            const categoryRegex = category.map(cat => new RegExp(cat as any, 'i'))
            query.category = { $in: categoryRegex}
        } else {
            query.category = {$regex: category, $options: 'i'}
        }
    } 
    if (subcategory) {
        if (Array.isArray(subcategory)) {
            const subcategoryRegex = subcategory.map(subcat => new RegExp(subcat as any, 'i'))
            query.subcategory = { $in: subcategoryRegex}
        } else {
            query.subcategory = { $regex: subcategory, $options: 'i'}
        }
    }
    if (!isNaN(min_price) && !isNaN(max_price)) {
        query['pricing.price'] = { $gte: min_price, $lte: max_price }
    } else {
        if (!isNaN(min_price)) {
            query['pricing.price'] = { $gte: min_price }
        }
        if (!isNaN(max_price)) {
            query['pricing.price'] = { $lte: max_price }
        }
    }
    if (color) {
        if (Array.isArray(color)) {
            query['color.color'] = { $in: color }
        } else {
            query['color.color'] = color
        }
    }
    if (brand) {
        if (Array.isArray(brand)) {
            query['brand.brand'] = { $in: brand }
        } else {
            query['brand.brand'] = brand
        }
    }
    if (size) {
        if (Array.isArray(size)) {
            query['size.size'] = { $in: size }
        } else {
            query['size.size'] = size
        }
    }

    try {
        const products = await Product.find(query, {}, options)
        res.json(products)
    } catch (error) {
        res.json(error).status(500)
    }
}

const getBestSeller = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 10
        const page = req.query.page ? parseInt(req.query.page as string) : 1
        const skip = limit * (page - 1)
        const products = await Product.find().sort({ sold: -1}).limit(limit).skip(skip)
        res.json(products)
    } catch (error) {
        res.json(error).status(500)
    }
}

const updateProduct = async (req: Request, res: Response) => {
    Product.updateOne({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if (err) res.status(500).json(err)
        if (!result) res.status(404).json({ message: 'Product not found' })
        res.status(200).json(result)
    })
}

const deleteProduct = async (req: Request, res: Response) => {
    Product.deleteOne({ _id: req.params.id }, (err: any, result: any) => {
        if (err) res.status(500).json(err)
        if (!result) res.status(404).json({ message: 'Product not found' })
        res.status(200).json(result)
    })
}

export default {
    getProducts,
    createProduct,
    getProductsByCategory,
    getProductsBySubCategory,
    getProductsByCategoryAndSubCategory,
    filterProducts,
    getProductsById,
    updateProduct,
    deleteProduct,
    getBestSeller
}
