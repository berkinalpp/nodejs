import express from 'express'

const app= express()

//TEMPLATE ENGİNE
app.set('view engine', 'ejs')

//MIDDLEWARES
app.use(express.static("public"))

//ROUTES

app.get('/' ,(req,res) => {
    res.status('200').render('index', {
        currentPage: 'index'
    })
})


app.get('/about' ,(req,res) => {
    res.status('200').render('about', {
        currentPage: 'about'
    })
})


app.get('/contact' ,(req,res) => {
    res.status('200').render('contact', {
        currentPage: 'contact'
    })
})


app.get('/courses' ,(req,res) => {
    res.status('200').render('courses', {
        currentPage: 'courses'
    })
})



app.get('/dashboard' ,(req,res) => {
    res.status('200').render('dashboard', {
        currentPage: 'dashboard'
    })
})


app.get('/login' ,(req,res) => {
    res.status('200').render('login', {
        currentPage: 'login'
    })
})


app.get('/register' ,(req,res) => {
    res.status('200').render('register', {
        currentPage: 'register'
    })
})

const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})