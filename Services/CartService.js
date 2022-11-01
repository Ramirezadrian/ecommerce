class CartService {
    constructor (repository) {
        this.repository = repository
    }

    getAll () {
        return this.repository.getAll()
    }

    create (data) {
        data.date = new Date()
        return this.repository.create(data)
    }

    getOne (id) {
        return this.repository.getOne(id)
    }

    update (id, data) {

        return this.repository.update(id, data)
    }

    delete (id) {
        return this.repository.delete(id)
    }

    getProducts (id) {
        return this.repository.getProducts(id)
    }

    addProduct (id, data) {
        
        return this.repository.addProduct(id, data)
    }

    removeProduct (id, id_prod) {
        return this.repository.removeProduct(id, id_prod)
    }
}

module.exports = CartService