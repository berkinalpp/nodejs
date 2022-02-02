import mongoose from 'mongoose'
import slugify from 'slugify'

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    slug_id: {
        type:String,
        unique:true
    }

})

CategorySchema.pre('validate',function(next){
    this.slug_id = slugify(this.name, {
        lower:true,
        strict:true
    })
    next()
})

const Category = mongoose.model('Category',CategorySchema);

export default Category;