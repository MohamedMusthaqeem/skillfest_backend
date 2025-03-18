const nodemailer = require("nodemailer");
require("dotenv").config;

const SendmailTransport = (
  email,
  name,
  event_name,
  supportnumone,
  supportnumtwo,
  date,
  time
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: "Sri Ramakrishna Enginnering College",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Greetings from SREC😊",
    text: `Dear ${name},\n
        We are thrilled to have you join us for ${event_name}! Your registration has been received, and we appreciate your enthusiasm to be a part of this exciting event.\n
        Details of the event\n
        Name:${event_name}\n
        Date: ${date}\n
        Time: ${time}PM\n
        Your participation means a lot to us, and we look forward to creating wonderful memories together. If you have any questions or need further information, feel free to reach out to us.\n
        Phone.no1:${supportnumone}\n
        Phone.no2:${supportnumtwo}\n
        Once again, thank you for registering, and we can't wait to see you at ${event_name}!\n
        Best regards,\n
        Sri Ramakrishna Engineering College\n`,
  };
  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
      console.log("mail sent success");
    } catch (error) {
      console.log(error);
    }
  };
  sendMail(transporter, mailOptions);
};

module.exports = {
  SendmailTransport,
};
