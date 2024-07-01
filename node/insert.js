const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017", console.log("conntected to database"));
//creating schema
const StudentSchema = new mongoose.Schema({ name: String, rollNo: Number, class: String, age: Number, email: String })
//Defining Student Model
const Students = mongoose.model('Student1', StudentSchema);
//get reference to database
students.Student1.insert({ name: 'sahil', rollNo: 21, class: 'sycs', age: 18, email: 'sahilmestry2005@gmail.com' });
console.log('Insert to database');