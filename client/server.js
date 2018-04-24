const express = require('express');
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(port);

console.log("Listening on port: " + port);