let express = require("express");
let app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (request, respond)=>{

    
});

app.listen(3000);