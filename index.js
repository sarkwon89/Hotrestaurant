var express = require("express");
var path = require("path");

var app = express();

//In order to make sure your server works on local & heroku you have to make sure the commandline looks like this
//process.env.PORT=heroku's port or local port
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var 





//Routing
app.get('/',(req,res)=> {
    res.send("Hot Restaurant!");
})

app.get('reserve',(req,res)=> {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get('tables',(req,res)=> {
    res.sendFile(path.join(__dirname, "tables.html"));
})


app.listen(PORT, function(){
    console.log("listenin on port" + PORT);
})