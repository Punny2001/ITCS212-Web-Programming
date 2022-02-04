/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");

/* Router Module for handling routing */
const router = express.Router();
app.use("/", router); 

/* --- Your code goes here --- */
router.use(bp.json());
router.use(bp.urlencoded({extended: true}));

router.get("/",function(req, res){
    console.log("Send a form");
    res.sendFile(path.join(__dirname+'/contact_us.html'));
});

router.post("/submit-form", function(req, res){
    console.log(req.method);
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const messages = req.body.messages;

    res.send(`<section style="font-family:Arial"><h1><b>Greeting <span style="background-color:pink">${name}</span></b></h1><br>
    The following message has been received: <span style="background-color:lightblue">${messages}</span><br>
    We will contact you via <span style="background-color:lightgreen">${email}</span>.`);
});

/* --- ------------------- --- */

/* Server listening */
app.listen(3030, function () {
    console.log("Server listening at Port 3030");
});