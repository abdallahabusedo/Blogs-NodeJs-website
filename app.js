const express = require('express')
const morgan = require('morgan')
// express app 
const app = express()

// register view engine
app.set('view engine','ejs')

// listen for request
app.listen(3000);

// middleware static files 
app.use(express.static('public'))

app.use(morgan('dev'))
app.get('/',(req,res)=>{
    const blogs = [
        {title: 'first blog', snippet: 'Lorem ipsum dolor sit amet, consectetur adip'},
        {title: 'second blog', snippet: 'Lorem ipsum dolor sit amet, consectetur adip'},
        {title: 'third blog', snippet: 'Lorem ipsum dolor sit amet, consectetur adip'}
    ]
    res.render('index', {
        title: 'Home',
        blogs,
    })
});

app.get('/about',(req,res)=>{
    res.render('about', {
        title: 'About'
    })
});

app.get('/blogs/create',(req,res)=>{
    res.render('create', {
        title: 'Create Blog'
    })
})
// must be at the end 
app.use((req,res)=>{
    res.status(404).render('404', {
        title: 'Not Found'
    })
})