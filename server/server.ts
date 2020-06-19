import express = require("express");
var cors = require("cors");
import { characterList } from "./characterList";

// Create a new express app instance
const app: express.Application = express();

app.use(cors());

// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200,
// };

const port: number = 4000;

app.get("/all", async (req, res) => {
  res.send(JSON.stringify(characterList));
});

app.get("/byname", async (req, res) => {
  // map the resulting items
  var queryParameter = req.query;
  const resultsFound = characterList.map(
    (item) => item.name == "Luke Skywalker"
  );
  res.send(queryParameter);
});

app.listen(port, function () {
  console.log("App is listening on port " + port + "!");
});
