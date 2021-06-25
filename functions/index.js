const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hamishjustin7@gmail.com",
    pass: "hamish626",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.webflowMail = functions.https.onRequest((req, res) => {
  const subject = req.body.subject;
  const name = req.body.name;
  const message = req.body.message;
  const recipient = req.body.recipient;

  let findEmailRecipient = (a) => {
    if (a == "Roskill South") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "roskillsouth@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Ōwairaka") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "owairaka@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Waikōwhai") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "waikowhai@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Oranga") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "oranga@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Northcote") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "Northcote@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Catalina Bay") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "hobsonville@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Mangere West") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "mangerewest@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "Aorere") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "aorere@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else if (a == "General" || a == "Other") {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "info@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    } else {
      let options = {
        from: "hamishjustin7@gmail.com",
        to: "info@piritahi.nz",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
      };
      return options;
    }
  };

  transporter.sendMail(findEmailRecipient(recipient), function (err) {
    // Error
    if (err) {
      console.log(err);
      return res.redirect("https://copy-of-piritahi.webflow.io/error");
    }

    // Success
    return res.redirect("https://copy-of-piritahi.webflow.io/success");
  });
});
