const express = require("express");
const app = express();
const costRoutes = require("./src/routes/routes");
const port = 8080;

app.use(costRoutes);
app.listen(port, () => {
  console.log(`server is listening on 8080`);
});
