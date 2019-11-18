const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ mes: "Post work" });
});

module.exports = router;
