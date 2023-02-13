import { Request, Response } from 'express'
import { faker } from '@faker-js/faker'
import Product from '../models/ProductModel'

const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find()
    res.json(products)
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

const getProductsBySearch = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({
            title: { $regex: req.query.title, $options: 'i' },
        })
        res.json(products)
    } catch (error) {
        res.json(error).status(500)
    }
}

const filterProducts = async (req: Request, res: Response) => {
    // const { title, category, sub_category, min_price, max_price } = req.query
    // check if the query is empty
    if (Object.keys(req.query).length === 0) {
        res.status(400).json({ message: 'No query' })
    } else {
        let products
        // check if the query has the
        if (req.query.title) {
            // check if the query.title is a substring of the product.title
            products = await Product.find({
                title: { $regex: req.query.title, $options: 'i' },
            })
        } else {
            products = await Product.find()
        }
        if (req.query.category) {
            // from the products, filter by category and ignore case
            products = products.filter((product) =>
                product.category.toLowerCase().includes((req.query.category as string).toLowerCase())
            )
        }
        if (req.query.sub_category) {
            // from the products, filter by sub_category
            products = products.filter((product) => 
                product.sub_category.toLowerCase().includes((req.query.sub_category as string).toLowerCase())
            )
        }
        if (req.query.min_price) {
            // from the products, filter by price
            products = products.filter(
                (product) => product.pricing.price >= parseInt(req.query.min_price as string)
            )
        }
        if (req.query.max_price) {
            products = products.filter(
                (product) => product.pricing.price <= parseInt(req.query.max_price as string)
            )
        }
        res.json(products)
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
    getProductsBySearch,
    filterProducts,
    getProductsById,
    updateProduct,
    deleteProduct,
}
