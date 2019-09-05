const express = require("express");
const app = express();
const costRoutes = require("./src/routes/routes");
const port = 8080;
const cors = require("cors");
const morgan = require("morgan");
const db = require("./src/db/db");
const url =
  "mongodb+srv://oleg:oleg@cluster0-srnre.gcp.mongodb.net/test?retryWrites=true&w=majority";

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(cors());
app.use(costRoutes);
db.connect(url, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("Connecting OK!!");
  app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });
});
