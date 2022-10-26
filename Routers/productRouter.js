const { Router } = require('express')
//const productModel = require('../models/products')
//const ProductDAOMongo = require('../DAOs/Products/ProductDAOMongo')
const ProductRepository = require('../Repositories/ProductRepository')
const ProductService = require('../Services/ProductService')
const ProductController = require('../Controllers/ProductController')

const productRouterFn = () => {
    //const productDAO = new ProductDAOMongo(productModel)
    const productRepository = new ProductRepository()
    const productService = new ProductService(productRepository)
    const productController = new ProductController(productService)

    const productRouter = Router()

    productRouter.get('/', productController.getAll.bind(productController))
    productRouter.post('/', productController.create.bind(productController)) 
    productRouter.get('/:id', productController.getOne.bind(productController))
    productRouter.put('/:id', productController.update.bind(productController))
    productRouter.delete('/:id', productController.delete.bind(productController))

    return productRouter

}

module.exports = productRouterFn