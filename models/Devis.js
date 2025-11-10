const mongoose = require("mongoose");
const { Schema } = mongoose;

const devisSchema = new Schema(
  {
    name: { type: String, required: true }, // Nom ou société
    email: { type: String, required: true },
    phone: { type: String },
    projectType: { type: String, required: true }, // rénovation, construction, aménagement...
    location: { type: String, required: true },
    budget: { type: Number },
    deadline: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Devis", devisSchema);
