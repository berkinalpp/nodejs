import mongoose from 'mongoose'

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const PhotoSchema = new Schema({
    title:String,
    description:String
})

const Photo =mongoose.model('Photo',PhotoSchema);

//*******    CREATE A PHOTO  *************

// Photo.create({
//     title:"Photo 2 Title",
//     description:"Photo 2 Description"
// })

//********** READ PHOTOS  **************
Photo.find({}, (err,data) => {
    console.log(data)
})



// *********** FIND AND UPDATE   **********
const id = '61f025c0a975fbc920555da6'

Photo.findByIdAndUpdate(id,{title: "Photo Title 2222 Updated"},{new:true},(err,data) => {
    if(err) {
        console.log(err)
    }
    console.log(data)
})


// *********** DELETE A PHOTO **********

const deleteID = "61f02f6ed5dc2a8924a19a28"

Photo.findByIdAndDelete(deleteID,(err) => {
    if(err) {
        console.log(err)
    }
    console.log('Photo is removed succesfully')
})