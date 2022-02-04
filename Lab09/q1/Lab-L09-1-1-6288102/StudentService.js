const path = require("path");
const express = require("express");
const app = express();

const bp = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const route = express.Router();
app.use("/", route); 

route.use(bp.json());
route.use(bp.urlencoded({extended: true}));

// create the connection to database
const mysql = require('mysql2');
let connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected DB: "+process.env.MYSQL_DATABASE);
});

//Insert student
route.post('/insert-student', function (req, res) {
    let student = req.body.student;
    console.log(student);
    if (!student) {
        return res.status(400).send({
            error: true, message: 'Please provide student information'
        });
    }
    connection.query("INSERT INTO personal_info SET ? ", student, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false, data: results.affectedRows, message: 'New student has been created successfully.'
        });
    });
});

//Update student
route.put('/update-student', function (req, res) {
    let student_id = req.body.student.StudentID;
    let student = req.body.student;
    if (!student_id || !student) {
        return res.status(400).send({
            error: student, message: 'Please provide student information'
        });
    }
    connection.query("UPDATE personal_info SET ? WHERE StudentID = ?", [student, student_id], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false, data: results.affectedRows, message: 'Student has been updated successfully.'
        })
    });
});

//Delete student
route.delete('/delete-student', function (req, res) {
    let student_id = req.body.student.StudentID;
    if (!student_id) {
        return res.status(400).send({ error: true, message: 'Please provide student_id' });
    }
    connection.query('DELETE FROM personal_info WHERE StudentID = ?', student_id, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Student has been deleted successfully.' });
    });
});

//Select all students
route.get('/student', function (req, res) {
    connection.query('SELECT * FROM personal_info', function (error, results) {
    if (error) throw error;
        return res.send({ error: false, data: results, message: 'Student list.' });
    });
});

//Select
route.get('/student/:id', function (req, res) {
    let student_id = req.params.id;
    if(!student_id){
        return res.status(400).send({ error: true, message: 'Please provide student_id' });
    }
    connection.query('SELECT * FROM personal_info WHERE StudentID = ?',student_id, function (error, results) {
        if (error) throw error;
            return res.send({ error: false, data: results[0], message: 'Student Retrieved.' });
        });
});

app.listen(process.env.PORT, function () {
    console.log("Server listening at Port " + process.env.PORT);}
); 