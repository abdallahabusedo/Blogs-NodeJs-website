const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
// express app 
const app = express()
// connect with mongodb
const dbURL = "<MongoDb URL>"
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) =>{
        console.log("connected to the database");
        // listen for request
        app.listen(3000);
    })
    .catch((error) => console.log(error))
// register view engine
app.set('view engine','ejs')

// middleware static files 
app.use(express.static( __dirname + "/public"))
app.use(express.urlencoded()) // to accept data from HTML
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.redirect('/blogs')
});

app.get('/about',(req,res)=>{
    res.render('about', {
        title: 'About'
    })
});

// blog routes
app.use("/blogs",blogRoutes)

// must be at the end 
app.use((req,res)=>{
    res.status(404).render('404', {
        title: 'Not Found'
    })
})
