import express = require("express");
import { characterList } from "./characterList";

// Create a new express app instance
const app: express.Application = express();
app.get("/AllCharacters", async (req, res) => {

  res.send(JSON.stringify(characterList));

});

app.get ("/CharactersByName", async (req, res) => {
  // map the resulting items
  const resultsFound = characterList.map(item=> item.name == "Luke Skywalker")
})

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
