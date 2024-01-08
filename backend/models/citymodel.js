import mongoose from "mongoose";

const citySchema=new mongoose.Schema
({
    name:{
        type:String,
        lowercase:true,
        required:true
    }

},{timestamps:true})

export const City= mongoose.model("City",citySchema)
