const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
var corsOPtions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOPtions));
app.use(express.urlencoded());
app.use(express.json());
const db = require("./config/mongoose");
app.use("/", require("./routes/index"));
// starting the sever
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Yup server is ruuning on port ", port);
});
