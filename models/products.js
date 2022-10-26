const { Schema, model } = require('mongoose')

const productSchema = new Schema({
 name: { type: String, required: true, max: 100 },
 description: { type: String, required: true, max: 100 },
 price: { type: Number, required: true, max: 999999},
 thumbnail: { type: String, required: true, max: 500 },
 category: { type: String, required: true, max: 100}
})

module.exports = model('Product', productSchema)