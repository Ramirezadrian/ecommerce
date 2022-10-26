const { Router } = require('express')
const CartRepository = require('../Repositories/CartRepository')
const CartService = require('../Services/CartService')
const CartController = require('../Controllers/CartController')

const cartRouterFn = () => {
    
    const cartRepository = new CartRepository()
    const cartService = new CartService(cartRepository)
    const cartController = new CartController(cartService)

    const cartRouter = Router()

    cartRouter.get('/', cartController.getAll.bind(cartController))
    cartRouter.post('/', cartController.create.bind(cartController)) 
    cartRouter.get('/:id', cartController.getOne.bind(cartController))
    cartRouter.put('/:id', cartController.update.bind(cartController))
    cartRouter.delete('/:id', cartController.delete.bind(cartController))

    return cartRouter

}

module.exports = cartRouterFn