const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema(
    {
        name:String,
        rollNo:Number,
        class:String,
        age:Number,
        email:String
    },{collection:"students"});
module.exports = mongoose.model("student",studentSchema)
