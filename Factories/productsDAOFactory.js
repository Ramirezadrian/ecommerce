const productModel = require('../models/products')
const ProductDAOMongo = require('../DAOs/Products/ProductDAOMongo')

const storageMap = {
    local: () => new ProductDAOMongo(productModel),
    mongo: () => new ProductDAOMongo(productModel)
}
module.exports = (storage) => {
    const storageFn = storageMap[storage] || storageMap.local

    const dao = storageFn()

    return dao
}