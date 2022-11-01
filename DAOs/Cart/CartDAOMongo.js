const db = require('../../db/mongo')
const cart = require('../../models/cart')

class CartDAOMongo {
    constructor (model) {
        this.db = db()
        this.model = model
    }

    getAll () {
        return this.model.find()
    }

    create (data) {
        return this.model.create(data)
    }
    
    getOne (id) {
        return this.model.findById(id)
            .then(cartItem => {
                if (!cartItem) {
                    throw new Error('Item not found')
                }
                return cartItem
            })
    }

    update (id, data) {
        
        return this.model.findByIdAndUpdate(id, { $set: data})
            .then(cartItem => {
                if (!cartItem) {
                    throw new Error('Item not found')
                }
                return cartItem
            })
    }

    delete (id) {
        return this.model.findByIdAndDelete(id)
            .then(cartItem => {
                if (!cartItem) {
                    throw new Error('Item not found')
                }
                return true
            })
    }

    getProducts (id) {
    
        return this.model.findById(id)
            .then(cart => {cart.items
                if (!cart.items) {
                    throw new Error('Products not found')
                }
                return cart.items
            })
    }

    addProduct (id, data) {
        
        return this.model.findById(id)
            .then(cartItem => {
                
                if (!cartItem) {
                    throw new Error('Item not found')
                }
                
                return cartItem
            })
    }

    removeProduct (id, id_prod) {
        return this.model.findByIdAndRemove(id, { $pull : {"items": id_prod}})

        .then(cart => {
            if (!cart) {
                throw new Error('Item not found')
            }
            console.log(cart)
           // cart.save()
            return true          
        })
    }

}    

module.exports = CartDAOMongo