const express = require("express");
const app = express();

app.use(express.static("public")); 

const PORT = 8080;

//  PAGES

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});


//  API

app.listen(PORT, (error => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port: " + PORT);
}));