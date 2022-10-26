const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
 email: { type: String, required: true, max: 100 },
 type: { type: String, required: true, max: 30 },
 date: { type: String, required: true, max: 100 },
 body: { type: String, required: true, max: 500 }
})

module.exports = model('Message', productSchema)