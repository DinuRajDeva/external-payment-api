const express = require("express");
const app = express();

app.get("/external-payment", (req, res) => {
  res.json({ status: "success" });
});

app.listen(7004);
