const Blog = require('../models/blogs')

const blog__index = (req, res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result) =>{
        res.render('index', {
            title: "All Blogs",
            blogs: result
        })
    })
    .catch(err => console.log(err))
}

const blog__details = (req, res) =>{
    const id = req.params.id
    Blog.findById(id)
    .then((result) =>{
        res.render('details',{blog: result, title: 'Blog Details'})
    })
    .catch(err => res.render('404', {title: '404 '}))
}

const blog__create__get= (req, res) =>{
    res.render('blogs/create', {
        title: 'Create Blog'
    })
}

const blog__create__post= (req, res) =>{
    const blog = new Blog(req.body)
    blog.save().then((result) =>{
        res.redirect('/blogs')
    }).catch(err => console.log(err))
}

const blog__delete = (req, res) =>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then((result) =>{
        res.json({redirect: '/blogs'})
    })
    .catch(err => console.log(err)) 
}
module.exports = {
    blog__index,
    blog__details,
    blog__create__get,
    blog__create__post,
    blog__delete
}