const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true }, // Transport / Déménagement / Location / Débarras / Autre
  subject: { type: String, required: true },
  description: { type: String, required: true },
  consent: { type: Boolean, required: true }, // RGPD
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
