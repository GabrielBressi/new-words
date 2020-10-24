const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


    // Body Parser 
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout : 'main'}))
        app.set('view engine', 'handlebars')

    // Rotas 
        app.get('/', function(req, res){
            Post.findAll().then(function(posts){
                res.render('index', {posts: posts})
            })

        })

        app.post('/cad', function(req, res){
            Post.create({
                new : req.body.new,
                phrase : req.body.phrase,
                translate : req.body.translate,
                link : req.body.link
            }).then(function(){
                res.redirect('/')
            }).catch(function(error){
                res.send(`Houve um erro: ${error}`)
            })
        })

     


app.listen(3000, function() {
    console.log('Server is running')
})