// const express = require("express");
// const app = express();

// app.use(express.static("public")); 

// const PORT = 8080;

// //  PAGES

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/frontpage/frontpage.html");
// });


// //  API

// app.listen(PORT, (error => {
//     if(error) {
//         console.log(error);
//         return;
//     }
//     console.log("Server is running on port: " + PORT);
// }));

const express = require("express");
const app = express();

const PORT = 8080;

// Set up routes to serve static files and add headers
app.use(express.static("public"));
app.use((req, res, next) => {
  if (req.url.endsWith(".css")) {
    res.setHeader("Content-Type", "text/css");
  }
  if (req.url.endsWith(".js")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  next();
});

// PAGES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

// API
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port: " + PORT);
});
