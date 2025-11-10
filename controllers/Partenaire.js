const Partenaire = require("../models/Partenaire");

exports.createPartenaireContact = async (req, res) => {
    try {
        const { company, email, phone, sector, collaboration, zone, message } = req.body;

        if (!company || !email || !sector || !message) {
            return res.status(400).json({ message: "Certains champs obligatoires sont manquants." });
        }

        const newPartenaire = await Partenaire.create({
            company,
            email,
            phone,
            sector,
            collaboration,
            zone,
            message,
        });

        res.status(201).json({
            message: "Demande de partenariat envoyée avec succès",
            data: newPartenaire, // ✅ correction ici
        });
    } catch (error) {
        console.error("Erreur lors de l’envoi du contact partenaire :", error);
        res.status(500).json({ message: "Erreur serveur, veuillez réessayer plus tard." });
    }
};
