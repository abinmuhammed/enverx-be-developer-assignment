const mongoose=require('mongoose')
const blogs=mongoose.Schema({
    Firstname:{
        type:String,
        required:[true,"Firstname field must be filled"]
    },
    BlogCategory:{
        type:String,
        required:[true,"Category field must be filled"]
    },
    Content:{
        type:String,
        required:[true,"Content field must be filled"]
    },
    Gender:{
        type:String,
        default:"nill"
    },
    Age:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('Blogs',blogs)