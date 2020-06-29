import express = require("express");
var cors = require("cors");
import { characterList } from "./characterList";

const port: number = 4000;
// Create a new express app instance
const app: express.Application = express();
// app.use(cors());
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: ["POST", "GET"],
};
//sddsrsfdsfdsfsd

app.get("/all", cors(corsOptions), async (req, res) => {
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
