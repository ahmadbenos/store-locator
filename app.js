const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

app.use(cors())

// ?connect to database
const connectDB = require("./config/db_connect").connectDB;
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.get("/se_c_aplol", (req, res) =>{
    res.send({key: process.env.MAPBOX_API})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))