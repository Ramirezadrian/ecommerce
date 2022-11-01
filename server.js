const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

const session = require('express-session')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const User = require('./models/user')
const flash = require('connect-flash')


const productRouterFn = require('./Routers/productRouter')
const cartRouterFn = require('./Routers/cartRouter')

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env')
})


const app = express()
app.use(session({
/*   store: MongoStore.create({
  mongoUrl: `mongodb://${database.host}:${database.port}/${database.name}`}), */
  secret: 'qwerty',
  resave: true,
  saveUninitialized : true

}))

//pasar a user

app.set('view engine', 'ejs')
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use('',express.static(__dirname + 'public'))


app.use('/api/products', productRouterFn())
app.use('/api/carrito', cartRouterFn())
//app.use('/', userRouterFn())


passport.use('login', new LocalStrategy((email, pass1, done) => {
  return User.findOne({email})
  .then(user => {
    if(!user) {
      return done(null, false, {message: 'Email incorrecto'})
    }

    if(!isValidPassword(user.pass, pass1)){
      return done(null, false, {message: 'Contraseña incorrecta'})

    }
    return done(null, user)
  })
  .catch(err=> done(err))
}))

passport.use('signup', new LocalStrategy({
  passReqToCallback: true
},(req, email, pass1, done) => {
  return User.findOne({email})
  .then(user => {
    if(user) {
      return done(null, false, {message: req.flash('El email ya existe')})
    }

    if(req.body.pass1 != req.body.pass2){
      return done(null, false, {message: req.flash('Los passwords tienen que ser iguales')})
    }


      const newUser = new User()
      newUser.email = email
      newUser.pass = createHash(pass1)
      newUser.name =req.body.name
      newUser.lastname = req.body.lastname
      newUser.phone = req.body.phone

      return newUser.save()
  

  })
  .then(user => done(null, user))
  .catch(err=> done(err))
}))

passport.serializeUser((user, done) => {
  console.log('serializeUser')
  done(null, user._id)

})

passport.deserializeUser((id, done) => {
  console.log('deserializeUser')
  User.findById(id,(err,user) => {
    done(err, user)
  })
})

app.get('/login', (req, res) => {
  return res.render('login', {message: req.flash('error')}) //EJS
 
}) 

app.get('/signup', (req, res) => {
return res.render('signup', {message: req.flash('error')}) //EJS

}) 

app.post('/login', passport.authenticate('login', {
successRedirect: '/',
failureRedirect: '/login',
failureFlash: true
}))


app.post('/signup', passport.authenticate('signup', {
successRedirect: '/',
failureRedirect: '/signup',
failureFlash: true
}))

app.get('/', (req,res,next) => {
  if(req.isAuthenticated()){
    return next()
  }
  return res.redirect('login')

}, (req, res) => {
  return res.render('home',{
    name:req.user.username,
    email:req.user.email
  }) //EJS
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
  })

  