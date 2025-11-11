const express = require("express");
const router = express.Router();
const { createDevis } = require("../controllers/Devis");

router.post("/sendDevis", createDevis);

module.exports = router;
