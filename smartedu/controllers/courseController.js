import Course from '../models/Course.js'

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
    const courses = await Course.find()

        res.status(200).render('courses',{
            courses,
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