const {Schema, model} = require("mongoose")



const workerSchema = new Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true
    },
    imagename : {
        type : String,
        required : true
    }
},{timestamps: true})


module.exports = model("Workers", workerSchema)