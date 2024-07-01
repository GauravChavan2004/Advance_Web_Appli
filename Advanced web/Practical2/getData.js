const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName:"StudentDb"
},console.log("Connected to database"))

const studentSchema = new mongoose.Schema(
    {
        name:String,
        rollNo:Number,
        class:String,
        age:Number,
        email:String
    }
)
const Student = mongoose.model("Student",studentSchema);
var db = mongoose.connection;
Student.find({}).then(data=>{
    console.log('Data : ');
    console.log(data); 
}).catch(error=>{
    console.log(error);
})
