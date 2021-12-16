("use strict");
const express = require("express");
//const Facture = require("./Facture.js");
const bodyParser = require("body-parser");
const apiRouters = require("./routes");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.port || 3001;

var corsOptions = {
  origin: `http://${process.env.angular_host}:${process.env.angular_port}`,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.json());

//var f = new Facture(1, 2, 3, new Date(2000, 2, 2), true);

app.use("/api/", apiRouters);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
