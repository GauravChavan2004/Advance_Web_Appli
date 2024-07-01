const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing (CORS) for all routes.
app.use(cors());
// Use the body-parser middleware to parse JSON-formatted request bodies
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.set('strictQuery', true);
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Student model
const studentSchema = new mongoose.Schema({
    name: String,
    address: String,
    dept: String    
});

const Student = mongoose.model('Student', studentSchema);

app.listen(port, () => {
    console.log('Server listening at http://localhost:%s', port);
});

// Routes
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status (201).json(student);
});
app.put('/students/:id', async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate (req.params.id, req.body, {new: true});
    res.json(updatedStudent);
});
app.delete('/students/:id', async (req, res) => {
    // Ensure `req.params.id is correctly obtained
    try {
        const result = await Student.findByIdAndDelete (req.params.id);
        if (!result) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.send({ message: 'Student deleted' });
    } catch (error) {
        res.status (500).send(error);
    }
});
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});