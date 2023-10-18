const mongoose=require('mongoose')

const Business = new mongoose.Schema
    ({
        name:
        {
            type:String,
            required:true,
            unique:true
        },
        location:
        {
            type:String,
            required:true
        },
        products:
        {
            type:String,
            required:true
        },
        tags:
        {
            type:String,
            required:true
        },
        about:
        {
            type:String,
            required:true
        },
        gst:
        {
            type:String,
            required:true
        },          
    })

    const collection = new mongoose.model("businessdetails", Business);
    module.exports=collection;
    