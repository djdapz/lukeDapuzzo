const express = require('express');
const app = express();
const path = require("path");

// noinspection ES6ModulesDependencies
const port = process.env.PORT || 3000;
const buildDir = __dirname + "/build";

app.use(express.static(buildDir));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(buildDir, 'index.html'))
});


app.listen(port);
console.log("Listening on port: " + port);