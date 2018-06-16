const express = require('express');
const app = express();
const path = require("path");
const config = require("./appConfig");
const fs = require('fs');

// noinspection ES6ModulesDependencies
const port = process.env.PORT || 3000;

fs.writeFile(__dirname + "/dist/config.js", "var env =" +JSON.stringify(config) , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(port);

console.log("Listening on port: " + port);