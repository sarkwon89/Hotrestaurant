let express = require("express");
let path = require("path");

let app = express();

//In order to make sure your server works on local & heroku you have to make sure the commandline looks like this
//process.env.PORT=heroku's port or local port
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


//customer DATA
let reservations = [{
customerName: "sarah",
phoneNumber: "12345",
customerEmail: "test@test.com",
customerID: "1",
    }

];

let waitData = [

];

let tableData = [

];



//Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
})

// Displays all characters
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReserverations = req.body;

  
    console.log(newReserverations);
  
    Reservations.push(newReserverations);
  
    res.json(newReserverations);
  });


app.listen(PORT, function () {
    console.log("listenin on port" + PORT);
})