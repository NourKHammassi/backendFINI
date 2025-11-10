const Message = require("../models/Message");

exports.createMessage = async (req, res) => {
  try {
    const { name, lastName, email, phone, serviceType, subject, description, consent } = req.body;
    // console.log("THIS IS CONSENT ",consent)
    // Validation
    // if (!name || !lastName || !email || !phone || !serviceType || !subject || !description || consent !== true) {
    //   return res.status(400).json({ error: "Tous les champs sont obligatoires et le consentement RGPD doit être accepté" });
    // }

    const newMessage = new Message({ name, lastName, email, phone, serviceType, subject, description, consent });
    await newMessage.save();

    res.status(201).json({ message: "Message envoyé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
