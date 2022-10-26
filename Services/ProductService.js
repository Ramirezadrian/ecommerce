class ProductService {
    constructor (repository) {
        this.repository = repository
    }

    getAll () {
        return this.repository.getAll()
    }

    create (data) {
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
}

module.exports = ProductService