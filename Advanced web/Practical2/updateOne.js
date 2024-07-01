const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName:"test",useUnifiedTopology:true,useNewUrlParser:true
},err=>err? console.log(err):console.log("Connected to database"))

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
var student1 = new Student({name:"Gaurav",
    rollNo:3,
    class:"SyCs",
    age:19,
    email:"gauravchavan101004@gmail.com"});

Student.updateOne({name:"Gaurav"},{name:"om"},function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    }
);
