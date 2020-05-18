import express = require("express");
import { characterList } from "./characterList";

// Create a new express app instance
const app: express.Application = express();
app.get("/AllCharacters", function (req, res) {
  res.send("Hello World!" + JSON.stringify(characterList));
});
app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
