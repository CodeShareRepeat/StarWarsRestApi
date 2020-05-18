"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var characterList_1 = require("./characterList");
// Create a new express app instance
var app = express();
app.get("/AllCharacters", function (req, res) {
    res.send("Hello World!" + JSON.stringify(characterList_1.characterList));
});
app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});
