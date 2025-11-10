const express = require("express");
const router = express.Router();
const { createPartenaireContact } = require("../controllers/Partenaire");

// Route POST
router.post("/contact", createPartenaireContact);

module.exports = router;
