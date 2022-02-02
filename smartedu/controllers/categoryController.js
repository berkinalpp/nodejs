import Category from "../models/Category.js"

export const createCategory = async(req,res) => {

    try{
    const category = await Category.create(req.body)

        res.status(201).json({
            success:'true',
            category
        })
    
    } catch(error) {
        res.status(400).json({ 
            success:'false',
            error
        })
    }

 
}
