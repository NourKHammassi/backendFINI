const mongoose = require("mongoose");
const { Schema } = mongoose;

const devisSchema = new Schema(
  {
    name: { type: String, required: true }, // Nom et prénom / société
    email: { type: String, required: true },
    phone: { type: String, required: true },
    typeOfRequest: { type: String, required: true }, // Type de demande
    subject: { type: String, required: true }, // Objet de la demande
    description: { type: String, required: true }, // Description détaillée
    consent: { type: Boolean, required: true }, // RGPD consent
  },
  { timestamps: true }
);

module.exports = mongoose.model("Devis", devisSchema);
