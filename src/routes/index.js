const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("Olá mundo, estou aprendendo Node-Js");
  res.render("index", {
      title: "ITI Inovação - FullStack NodeJs-Express-MongoDB",
      task: []
  });
});

module.exports = router;
