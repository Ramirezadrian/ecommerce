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
}

module.exports = CartRepository