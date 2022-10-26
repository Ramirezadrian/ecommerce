const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

const productRouterFn = require('./Routers/productRouter')

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use('',express.static(__dirname + 'public'))


app.use('/api/products', productRouterFn())
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
  })

  