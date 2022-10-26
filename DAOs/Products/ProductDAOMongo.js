const db = require('../../db/mongo')

class ProductDAOMongo {
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
            .then(productItem => {
                if (!productItem) {
                    throw new Error('Item not found')
                }
                return productItem
            })
    }

    update (id, data) {
        return this.model.findByIdAndUpdate(id, { $set: data})
            .then(productItem => {
                if (!productItem) {
                    throw new Error('Item not found')
                }
                return productItem
            })
    }

    delete (id) {
        return this.model.findByIdAndDelete(id)
            .then(productItem => {
                if (!productItem) {
                    throw new Error('Item not found')
                }
                return true
            })
    }

}    

module.exports = ProductDAOMongo