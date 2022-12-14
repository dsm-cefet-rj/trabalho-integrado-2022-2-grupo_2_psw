var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var Users = require('../models/users')
var passport = require('passport')
var authenticate = require('../authenticate')
router.use(bodyParser.json())

router
   .post('/signup', (req, res, next) => {
      Users.register(new Users({ username: req.body.username }), req.body.password, (err, user) => {
         if (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.json({ err: err })
         }
         else {
            passport.authenticate('local')(req, res, () => {
               res.statusCode = 200
               res.setHeader('Content-Type', 'application/json')
               res.json({ success: true, status: 'Registrado com sucesso!' })
            })
         }
      })

   })

   .post('/login', passport.authenticate('local'), (req, res) => {
      var token = authenticate.getToken({ _id: req.user._id })
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json({ success: true, token: token, status: 'Você está logado!' })
   })

   .get('/logout', (req, res, next) => {
      if (req.session) {
         req.session.destroy()
         res.clearCookie('session-id')
         res.redirect('/')
      }
      else {
         var err = new Error('Você não está logado!')
         err.status(403)
         next(err)
      }
   })




