const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
 items: { type: Array, required: true},
 norder: { type: Number, required: true},
 date: { type: Date, required: true},
 state: { type: String, required: true, max: 30},
 email: { type: String, required: true, max: 100}
})

module.exports = model('Order', productSchema)