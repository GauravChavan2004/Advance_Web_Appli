const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017", console.log("conntected to database"));
//creating schema
const StudentSchema = new mongoose.Schema({ name: String, rollNo: Number, class: String, age: Number, email: String })
//Defining Student Model
const Student = mongoose.model('Student', StudentSchema);
//create collection of model
Student.createCollection().then(function () { console.log("collection is created"); });