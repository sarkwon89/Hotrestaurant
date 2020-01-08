var express = require("express");

var app = express();

//In order to make sure your server works on local & heroku you have to make sure the commandline looks like this
//process.env.PORT=heroku's port or local port
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=> {
    res.send("Hot Restaurant!");
})


app.listen(PORT, function(){
    console.log("listenin on port" + PORT);
})