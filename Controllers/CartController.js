class CartController {
    constructor(service) {
        this.service = service
    }

    getAll (req, res) {
        return this.service.getAll()
            .then(cart => res.json(cart))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    create (req, res) {
        const data = req.body

        return this.service.create(data)
            .then(cartItem => res.status(201).json(cartItem._id))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    getOne (req, res) {
        const { id } = req.params

        return this.service.getOne(id)
            .then(cartItem => res.json(cartItem))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    update (req, res) {
        const { id } = req.params
        const data = req.body


        return this.service.update(id, data)
            .then(cartItem => res.json(cartItem))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    delete (req, res) {
        const { id } = req.params

        return this.service.delete(id)
            .then(response => res.status(204).json(response))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    getProducts (req, res) {
        const { id } = req.params

        console.log(id)
        return this.service.getProducts(id)
            .then(cart => res.json(cart))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    addProduct (req, res) {
        const { id } = req.params
        const data = req.body

        console.log(data)

        return this.service.addProduct(id, data)
            .then(cartItem => {
                cartItem.items.push(data)
                cartItem.save()
                res.json(cartItem)
            })
            .catch(e => res.status(500).json({
                error: e.message
            }))
        }

    removeProduct (req, res) {
        const { id, id_prod } = req.params

        return this.service.removeProduct(id, id_prod)
        .then(response => res.status(204).json(response))
        .catch(e => res.status(500).json({
            error: e.message
            }))
        }
        
}

module.exports = CartController