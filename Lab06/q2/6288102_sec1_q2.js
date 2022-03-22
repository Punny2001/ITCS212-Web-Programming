const path = require('path');
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello World! in plain text");
    console.log("Req at: ",req.url);
});

app.get('/th', function(req,res){
    res.sendFile(path.join(__dirname+'/greeting_th.html'));
    console.log("Req at: ",req.url);
});

app.get('/cn', function(req,res){
    res.sendFile(path.join(__dirname+'/greeting_cn.html'));
    console.log("Req at: ",req.url);
});

app.use((req,res,next)=>{
    res.status(404).send("Where are you going?");
    console.log("Req at: ",req.url);
});

app.listen(3030);
console.log('Running at port 3030');