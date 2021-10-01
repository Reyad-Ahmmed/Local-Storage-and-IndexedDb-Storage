var express = require('express');
var app = express();
app.use(express.static(__dirname + '/webServer'));
app.listen(60660, ()=>{
    console.log("Server Running At Port Number : 60660");
    console.log("Stop Server Press Ctrl + C.");
});