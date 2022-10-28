const userModel = require('../models/user')
const UserDAOMongo = require('../DAOs/User/UserDAOMongo')

const storageMap = {
    local: () => new UserDAOMongo(userModel),
    mongo: () => new UserDAOMongo(userModel)
}
module.exports = (storage) => {
    const storageFn = storageMap[storage] || storageMap.local

    const dao = storageFn()

    return dao
}