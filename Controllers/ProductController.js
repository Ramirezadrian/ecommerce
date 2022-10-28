class ProductController {
    constructor(service) {
        this.service = service
    }

    getAll (req, res) {
        return this.service.getAll()
            .then(product => res.json(product))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    create (req, res) {
        const data = req.body

        return this.service.create(data)
            .then(productItem => res.status(201).json(productItem))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    getOne (req, res) {

        const { id } = req.params

        return this.service.getOne(id)
            .then(productItem => res.json(productItem))
            .catch(e => res.status(500).json({
                error: e.message
            }))
    }

    update (req, res) {
        const { id } = req.params
        const data = req.body


        return this.service.update(id, data)
            .then(productItem => res.json(productItem))
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

    //Devuelve los productos que coinciden con la categoria 
    getByCategory (req, res) {
        const {category} = req.params
       
        return this.service.getByCategory(category)
            .then(productsByCategory => res.json(productsByCategory))
            .catch(e => res.status(500).json({
                error: e.message
            }))            
    }
}

module.exports = ProductController