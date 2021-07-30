const express = require("express");
const cors = require("cors");
const log = require("log-to-file");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/add", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  let retVal = a + b;
  res.json(retVal);
  log(
    `operation: {${req.url.substr(
      1
    )}} requestBody: {"a": ${a}, "b": ${b}} returnedValue: ${retVal}`
  );
});

app.get("/sub", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  let retVal = a - b;
  res.json(retVal);
  log(
    `operation: {${req.url.substr(
      1
    )}} requestBody: {"a": ${a}, "b": ${b}} returnedValue: ${retVal}`
  );
});

app.get("/mul", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  let retVal = a * b;
  res.json(retVal);
  log(
    `operation: {${req.url.substr(
      1
    )}} requestBody: {"a": ${a}, "b": ${b}} returnedValue: ${retVal}`
  );
});

app.get("/div", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  let retVal = a / b;
  res.json(retVal);
  log(
    `operation: {${req.url.substr(
      1
    )}} requestBody: {"a": ${a}, "b": ${b}} returnedValue: ${retVal}`
  );
});
