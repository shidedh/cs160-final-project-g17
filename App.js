/*
PROJECT 2
Template code for CS160 Summer 2022
Prepared by Shm Garanganao Almeda
Code referenced from:
CS160 Summer 2021
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html
Photo Credits:
Bunny by Satyabratasm on Unsplash <https://unsplash.com/photos/u_kMWN-BWyU>
*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const express = require('express');
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath));  //tell express to use that folder



//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});
app.get("/community", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/front_page.html"))
});
app.get("/news", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/news.html"))
});
app.get("/community0", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/community0.html"))
});
app.get("/discover", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/discover.html"))
});
app.get("/followed", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/followed.html"))
});
app.get("/candidates", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/candidates.html"))
});


// -- URL NAVIGATION -- //
//depending on what url extension the user navigates to, send them the respective html file.

/** You can add your own URLS here **/

// app.get('/your_page_here', function (req, res) {
//     res.sendFile(publicPath + '/your_page_here.html');
// });

//run this server by entering "node App.js" using your command line.
   app.listen(port, () => {
     console.log(`Server is running on http://${host}:${port}`);
   });