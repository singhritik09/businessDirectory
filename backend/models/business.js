const mongoose=require('mongoose')

const Business = new mongoose.Schema
    ({
        name:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        location:
        {
            type:String,
            required:true,
            lowercase:true,
        },
        products:
        {
            type:String,
            required:true,
            lowercase:true,
        },
        tags:
        {
            type:String,
            required:true,
            lowercase:true,
        },
        about:
        {
            type:String,
            required:true,
            lowercase:true,
        },
        gst:
        {
            type:String,
            required:true,
            lowercase:true,
        },
        city:{
            type:String,
            lowercase:true
        }
        // businessImage:{
        //     type:String
        // }, 
        // city:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"City"
        // }
    })

    const collection = new mongoose.model("businessdetails", Business);
    module.exports=collection;