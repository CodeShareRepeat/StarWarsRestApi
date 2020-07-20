import express = require("express");
import { characterList, character } from "./characterList";
var cors = require("cors");

const port: number = 4000;
const app: express.Application = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ["GET", "POST"],
};

app.get("/search", cors(corsOptions), async (req, res) => {
  const searchString: string = req.query.searchstring as string;

  if (searchString === "*") {
    res.send(JSON.stringify(characterList));
  } else {
    let resultsFound: character[] = [];

    characterList.forEach((item) => {
      if (
        item.name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.aliance.toLowerCase().includes(searchString.toLowerCase()) ||
        item.homeworld.toLowerCase().includes(searchString.toLowerCase()) ||
        item.class.toLowerCase().includes(searchString.toLowerCase()) ||
        item.species.toLowerCase().includes(searchString.toLowerCase())
      ) {
        resultsFound.push(item);
      }
    });

    res.send(resultsFound);
  }
});

app.options("*");
app.delete("/remove", cors(corsOptions), async (req, res) => {
  const searchString: string = req.query.searchstring as string;

  characterList.forEach((item) => {
    if (item.name.toLowerCase().includes(searchString.toLowerCase())) {
      characterList.indexOf(item);
      characterList.splice(characterList.indexOf(item), 1);
    }
  });

  res.send(characterList);
});

app.listen(port, function () {
  console.log("App is listening on port " + port + "!");
});
