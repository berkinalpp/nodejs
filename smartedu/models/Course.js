import mongoose from 'mongoose'
import slugify from 'slugify'

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description: {
        type:String,
        required:true,
        trim:true
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    slug_id: {
        type:String,
        unique:true
    }

})

CourseSchema.pre('validate',function(next){
    this.slug_id = slugify(this.name, {
        lower:true,
        strict:true
    })
    next()
})

const Course = mongoose.model('Course',CourseSchema);

export default Course;