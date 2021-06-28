const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Outlook365",
  auth: {
    user: "noreply@piritahi.nz",
    pass: "dlrpmyzgbfrknnly",
  },
});

exports.webflowMail = functions.https.onRequest((req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;
  const homeNumber = req.body.homeNumber;
  const contactPreference = req.body.contactPreference;
  const recipient = req.body.recipient;

  let contactCopy;

  if (homeNumber == "" && mobileNumber == "") {
    contactCopy = `You can contact ${name} by email: ${email}`;
  } else if (homeNumber == "" && mobileNumber != "") {
    contactCopy = `You can contact ${name} by email: ${email} & on ${mobileNumber}`;
  } else if (homeNumber != "" && mobileNumber == "") {
    contactCopy = `You can contact ${name} by email: ${email} & on ${homeNumber}`;
  } else {
    contactCopy = `You can contact ${name} by email: ${email} & on ${homeNumber} or ${mobileNumber}`;
  }

  let findEmailRecipient = (a) => {
    if (a == "Roskill South") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "roskillsouth@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Ōwairaka") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "owairaka@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Waikōwhai") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "waikowhai@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Oranga") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "oranga@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Northcote") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "Northcote@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Catalina Bay") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "hobsonville@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Mangere West") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "mangerewest@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "Aorere") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "aorere@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else if (a == "General" || a == "Other") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "info@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    } else {
      let options = {
        from: "noreply@piritahi.nz",
        to: "info@piritahi.nz",
        subject: `Online Form Submission from ${name}`,
        html: `Message sent from ${name} for ${recipient}<br><br>${message}<br><br>${contactCopy}<br>They would prefer to be contacted by ${contactPreference}.<br><br><img src="https://i.ibb.co/gr6NR8k/piritahi.png" alt="piritahi" border="0" />`,
      };
      return options;
    }
  };

  transporter.sendMail(findEmailRecipient(recipient), function (err) {
    // Error
    if (err) {
      console.log(err);
      return res.redirect("www.piritahi.nz/error");
    }

    // Success
    return res.redirect(
      "www.piritahi.nz/submission-success"
    );
  });
});
