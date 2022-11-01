const db = require('../../db/mongo')

class UserDAOMongo {
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
            .then(userItem => {
                if (!userItem) {
                    throw new Error('Item not found')
                }
                return userItem
            })
    }

/*     update (id, data) {
        return this.model.findByIdAndUpdate(id, { $set: data})
            .then(cartItem => {
                if (!cartItem) {
                    throw new Error('Item not found')
                }
                return cartItem
            })
    } */

    delete (id) {
        return this.model.findByIdAndDelete(id)
            .then(userItem => {
                if (!userItem) {
                    throw new Error('Item not found')
                }
                return true
            })
    }

}    

module.exports = UserDAOMongo