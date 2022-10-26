const cartModel = require('../models/cart')
const CartDAOMongo = require('../DAOs/Cart/CartDAOMongo')

const storageMap = {
    local: () => new CartDAOMongo(cartModel),
    mongo: () => new CartDAOMongo(cartModel)
}
module.exports = (storage) => {
    const storageFn = storageMap[storage] || storageMap.local

    const dao = storageFn()

    return dao
}