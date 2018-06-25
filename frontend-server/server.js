const express = require('express');
const app = express();
const path = require("path");
const config = require("./appConfig");
const fs = require('fs');

// noinspection ES6ModulesDependencies
const port = process.env.PORT || 3000;
const buildDir = __dirname + "/dist";

console.log("About to create config file");

fs.writeFile(buildDir + "/config.js", "var env =" + JSON.stringify(config), function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");

    app.listen(port);
    console.log("Listening on port: " + port);

});

app.use(express.static(buildDir));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(buildDir, 'index.html'))
});