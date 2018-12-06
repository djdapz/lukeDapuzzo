const express = require('express');
const app = express();
const path = require("path");

// noinspection ES6ModulesDependencies
const port = process.env.PORT || 3000;
const buildDir = __dirname + "/build";

app.use(express.static(buildDir));

app.get('/*', function (request, response) {
    response.sendFile(path.resolve(buildDir, 'index.html'))
});


app.listen(port);
console.log(`Example app listening on port ${port}! Go to https://localhost:${port}/`)
//
// https.createServer(options, app).listen(port);
// console.log("Listening on port: " + port);

// https
//     .createServer(options, app)
//     .listen(port, function () {
//         console.log(`Example app listening on port ${port}! Go to https://localhost:${port}/`)
//     });
