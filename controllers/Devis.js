const Devis = require("../models/Devis");

exports.createDevis = async (req, res) => {
  try {
    const { name, email, phone, typeOfRequest, subject, description, consent } = req.body;

    // Validation basique
    if (!name || !email || !phone || !typeOfRequest || !subject || !description || !consent) {
      return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires et accepter le RGPD." });
    }

    const newDevis = new Devis({
      name,
      email,
      phone,
      typeOfRequest,
      subject,
      description,
      consent,
    });

    await newDevis.save();
    res.status(201).json({ message: "Demande de devis envoyée avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la création du devis :", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
};
