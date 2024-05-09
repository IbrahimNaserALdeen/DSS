const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, email, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "barhoomnaser44@gmail.com",
      pass: "18121999",
    },
  });

  const mailOptions = {
    from: "barhoomnaser44@gmail.com",
    to: "recipient-email@example.com",
    subject: "New Quote Request",
    html: `
      <h3>New Quote Request</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Service: ${service}</p>
      <p>Message: ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
