const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName:"StudentDb"},console.log("Connected to database"))

const studentSchema = new mongoose.Schema(
    {
        name:String,
        rollNo:Number,
        class:String,
        age:Number,
        email:String
    }
)
var db = mongoose.connection;
const Student = mongoose.model("Student",studentSchema);
db.once('open',function(){
Student.insertMany([
    {name:"Sahil Mestry",
    rollNo:18,
    class:"SYCS",
    age:18,
    email:"sahilmestry2006@gmail.com"
    },
    {name:"Pratik Vardekar",
    rollNo:37,
    class:"SYCS",
    age:19,
    email:"pratikVardekar2004@gmail.com"
    },
    {name:"Jayesh Pednekar",
    rollNo:27,
    class:"SYCS",
    age:19,
    email:"jayeshPednekar@gmail.com"
    }]).then(function(){
        console.log('data inserted');
    }).catch(function(err){
        console.log(err);
    })

})