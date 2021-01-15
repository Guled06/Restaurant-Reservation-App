const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const tables = [];
const waitlist = [];
// HOME VIEW
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
// TABLES VIEW
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
// RESERVE VIEW 
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
// TABLES ROUTE
app.get("/api/tables", function(req, res) {
    res.json(tables);
});
// WAITLIST ROUTE
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist)
});
app.post("/api/reservation", function(req, res) {
    if (tables.length < 5) {
        tables.push(req.body);
        res.send("tables");
    } else {
        waitlist.push(req.body)
        res.send("waitlist");
    }
})
// LISTEN 
app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`)
});





