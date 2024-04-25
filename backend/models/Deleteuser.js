import mongoose from "mongoose";

const deleteUserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        fathername:{
        type:String,
       
    }, 
       email:{
        type:String,
        required:true
    },
         phone:{
        type:String,
        required:true
    }
},{timestamps:true})


const deleteusermodel= mongoose.model('deleteuser',deleteUserSchema)

export default deleteusermodel