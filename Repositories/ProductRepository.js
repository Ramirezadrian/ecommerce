//const productModel = require('../models/products')
//const ProductDAOMongo = require('../DAOs/Products/ProductDAOMongo')

const productDAOFactory = require('../Factories/productsDAOFactory')

class ProductRepository {
    constructor () {
        this.dao = productDAOFactory(process.env.STORAGE)
    }

    getAll () {
        return this.dao.getAll()
    }

    create (data) {
        return this.dao.create(data)
    }

    getOne (id) {
        return this.dao.getOne(id)
    }

    update (id, data) {
        return this.dao.update(id, data)
    }

    delete (id) {
        return this.dao.delete(id)
    }
    
    getByCategory (category) {
        return this.dao.getByCategory(category)
    }
}
module.exports = ProductRepository