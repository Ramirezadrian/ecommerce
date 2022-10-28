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

    getByCategory (category) {
        return this.model.find({"category" : {$eq: category}})
            .then(productsByCategory => {
                console.log("acac")
                console.log(typeof productsByCategory)
                console.log()
                if (Object.entries(productsByCategory).length === 0) {
                    throw new Error('Category not found')
                }
                console.log(productsByCategory)
                return productsByCategory 
            })
    }

}    

module.exports = ProductDAOMongo