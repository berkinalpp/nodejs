import express from 'express'
import mongoose from 'mongoose'
import pageRoute from './routes/pageRoute.js'
import courseRoute from './routes/courseRoute.js'
import categoryRoute from './routes/categoryRoute.js'

const app= express()

mongoose.connect('mongodb://localhost:27017/smartedu-db',(err)=> {
    if(err) {
        console.log(err);
        return
    }
    console.log('MongoDB Connected')
})

//TEMPLATE ENGİNE
app.set('view engine', 'ejs')

//MIDDLEWARES
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static("public"))


//ROUTES
app.use('/',pageRoute)
app.use('/courses',courseRoute)
app.use('/categories',categoryRoute)



const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})