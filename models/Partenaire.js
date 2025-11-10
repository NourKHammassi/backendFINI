const mongoose = require("mongoose");
const { Schema } = mongoose;

const partenaireSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, "Le nom de la société est requis"],
        },
        email: {
            type: String,
            required: [true, "L'email est requis"],
        },
        phone: {
            type: String,
        },
        sector: {
            type: String,
            required: [true, "Le secteur d’activité est requis"],
        },
        collaboration: {
            type: String,
        },
        zone: {
            type: String,
        },
        message: {
            type: String,
            required: [true, "Le message est requis"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Partenaire", partenaireSchema);
