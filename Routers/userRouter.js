const express = require('express')
const { Router } = express
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const flash = require('connect-flash')


const { createHash, isValidPassword } = require('../routers/utils.js')
const login = Router()
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine')
app.use(session)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())

passport.use('login', new LocalStrategy((name, pass1, done) => {
  return User.findOne({name})
  .then(user => {
    if(!user) {
      return done(null, false, {message: 'Nombre de usuario incorrecto'})
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
},(req, name, pass1, done) => {
  return User.findOne({name})
  .then(user => {
    if(user) {
      return done(null, false, {message: 'El nombre de usuario ya existe'})
    }

    const newUser = new User()
    newUser.name = name
    newUser.lastname = req.body.lastname
    newUser.password = createHash(pass1)
    newUser.email =req.body.email
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

login.get('/login', (req, res) => {
    return res.render('login', {message: req.flash('error')}) //EJS
   
}) 

login.get('/signup', (req, res) => {
  return res.render('signup', {message: req.flash('error')}) //EJS
 
}) 

login.post('/login', passport.authenticate('login', {
  successRedirect: '/api/products',
  failureRedirect: '/login',
  failureFlash: true
}))


login.post('/signup', passport.authenticate('signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}))

login.get('/', (req,res,next) => {
    if(req.isAuthenticated()){
      return next()
    }
    return res.redirect('login')
  
  }, (req, res) => {
    return res.render('home') //EJS
  })
  module.exports = login