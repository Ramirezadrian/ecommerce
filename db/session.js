
const MongoStore = require('connect-mongo')
const config = require('../config/mongo')

let isConnected = false
module.exports = () => {
    if (isConnected){return}

    const database = config()
    isConnected = true
    return MongoStore.create({
        mongoUrl: `mongodb://${database.host}:${database.port}/${database.name}`})

}
