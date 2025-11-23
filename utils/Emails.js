require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendMail = async (receiverEmail, subject, body) => {
  const msg = {
    to: receiverEmail,
    from: "support@finipro.site",
    subject: subject,
    html: body,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent via SendGrid");
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error);
    throw error;
  }
};
