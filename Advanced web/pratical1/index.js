const mongoose = require("mongoose")
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017",console.log('Connected to database'));
const studentSchema = new mongoose.Schema({
    name:String,rollNo:Number,class:String,age:Number,email:String
})
const student = mongoose.model('Student',studentSchema);
student.createCollection().then(function(){
    console.log("Collection is created");
})
