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
let tableData = [{
        customerName: "sarah",
        phoneNumber: "12345",
        customerEmail: "test@test.com",
        customerID: "1",
    }

];

let waitData = [

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

// Displays all characters that made reservations
app.get("/api/tables", function (req, res) {
    return res.json(tableData);
});

//Displays all characters that are in waitlist
app.get("/api/waitlist", function (req, res) {
    return res.json(waitData);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;


    if (tableData.length < 5) {
        tableData.push(newReservation)
        res.json()
    } else {
        waitData.push(newReservation)
        res.json()
    }
});



app.listen(PORT, function () {
    console.log("listenin on port" + PORT);
})