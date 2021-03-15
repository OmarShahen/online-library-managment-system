const express = require("express");
const app = express();
const path = require("path");



app.get("/", (request, respond)=>{

    respond.sendFile(path.join(__dirname + "/views/home.html"));
});

app.listen(3000);