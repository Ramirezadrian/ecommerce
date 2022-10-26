const { Schema, model } = require('mongoose')

const userSchema = new Schema({
 name: { type: String, required: true, max: 100 },
 lastname: { type: String, required: true, max: 100 },
 phone: { type: Number, required: true, max: 25},
 email: { type: String, required: true, max: 500 },
 pass: { type: String, required: true, max: 16}
})

module.exports = model('User', userSchema)