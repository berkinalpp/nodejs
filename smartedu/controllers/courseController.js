import Course from '../models/Course.js'
import Category from '../models/Category.js'

export const createCourse = async(req,res) => {

    try{
    const course = await Course.create(req.body)

        res.status(201).json({
            success:'true',
            course
        })
    
    } catch(error) {
        res.status(400).json({ 
            success:'false',
            error
        })
    }

 
}


export const getAllCourses = async(req,res) => {

    try{
        const categorySlug = req.query.categories;
        console.log(categorySlug)
        const category = await Category.findOne({slug_id:categorySlug})
        console.log(category)
        let filter = {};
        if(categorySlug) {
          filter = {category:category._id}
        }
        const courses = await Course.find(filter);
        console.log(courses)
    const categories = await Category.find()

        res.status(200).render('courses',{
            courses,
            categories,
            currentPage:'courses'
        })
    
    } catch(error) {
        res.status(400).json({ 
            success:'false',
            error
        })
    }

 
}


export const getCourse = async(req,res) => {

    try{
    const course = await Course.findOne({slug_id:req.params.slug_id})

        res.status(200).render('course',{
            course,
            currentPage:'courses'
        })
    
    } catch(error) {
        res.status(400).json({ 
            success:'false',
            error
        })
    }

 
}