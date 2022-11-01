const cartDAOFactory = require('../Factories/cartDAOFactory')

class CartRepository {
    constructor () {
        this.dao = cartDAOFactory(process.env.STORAGE)
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

    getProducts (id) {
        
        return this.dao.getProducts(id)
    }

    addProduct (id, data) {
       
        return this.dao.addProduct(id, data)
    }

    removeProduct (id, id_prod) {
        return this.dao.removeProduct(id, id_prod)
    }
    
}

module.exports = CartRepository