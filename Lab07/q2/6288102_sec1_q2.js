const path = require('path');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();
app.use('/', router);

const mysql = require('mysql2');
var connection = mysql.createConnection({
    host    : process.env.MYSQL_HOST,
    user    : process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE 
});

connection.connect(function(){
    console.log("Connected DB : "+process.env.MYSQL_DATABASE);
});

app.listen(process.env.PORT, function(){
    console.log("Server listening at Port "+process.env.PORT);
});

router.get('/cis-students', function(req, res){
    console.log("Retrieved all CIS students in tinycollege...");
    let sql = "SELECT CONCAT (STU_FNAME,' ', STU_LNAME) as student_name, STU_GPA as GPA FROM student WHERE DEPT_CODE = 'CIS'";

    connection.query(sql, function(error,results){
        if(error) throw error;
        console.log(results.length + " CIS students returned");
        return res.send(results);
    });
});

router.get('/cis-students-list', function(req, res){
    console.log("Retrieved all CIS students n tinycollege (List)...");
    let sql = "SELECT CONCAT (STU_FNAME,' ', STU_LNAME) as student_name, STU_GPA as GPA FROM student WHERE DEPT_CODE = 'CIS' ORDER BY student_name ASC";

    connection.query(sql, function(error,results){
        if(error) throw error;
        let output = "<h2>CIS Students</h2><ul>";
        results.forEach(students => {
            output += "<li>" + students.student_name;
            output += "&nbsp" + "(GPA:"+students.GPA+")";
            output += "</li>";
        });
        output += "</ui>";
        res.send(output);
    });
});