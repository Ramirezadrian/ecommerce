const { Schema, model } = require('mongoose')


const cartSchema = new Schema({
 email: { type: String, required: true, max: 100 },
 date: { type: Date, required: true},
 items: { type: Array, required: true, max: 999999},
 dir: { type: String, required: true, max: 500 }
})

module.exports = model('Cart', cartSchema)