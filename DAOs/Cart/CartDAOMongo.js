const db = require('../../db/mongo')

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

}    

module.exports = CartDAOMongo