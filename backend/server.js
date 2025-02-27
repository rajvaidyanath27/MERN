const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.URI).then(() => {
    console.log("Connected succesfully");

    app.listen( process.env.PORT || 8000 , (err) => {
        if(err) console.log(err);
        console.log("Running successfully at", process.env.PORT);
    });
})
.catch((error) => {
    console.log("error", error);
});

app.get("/",(req,res) => {
    res.send("Api is running");
})
