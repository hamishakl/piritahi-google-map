const functions = require("firebase-functions");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "Outlook365",
    auth: {
      user: 'noreply@piritahi.nz',
      pass: 'dlrpmyzgbfrknnly'
    },    
  })



exports.webflowMail = functions.https.onRequest((req, res) => {
  const subject = req.body.subject;
  const name = req.body.name;
  const message = req.body.message;
  const recipient = req.body.recipient;


  let findEmailRecipient = (a) => {
    if (a == "Roskill South") {
      let options = {
        from: "noreply@piritahi.nz",
        to: "hamish.henare@gmail.com",
        subject: subject,
        html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    };
      return options 
    } 
    // else if (a == "Ōwairaka") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "owairaka@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "Waikōwhai") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "waikowhai@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "Oranga") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "oranga@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "Northcote") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "Northcote@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "Catalina Bay") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "hobsonville@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "Mangere West") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "mangerewest@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "Aorere") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "aorere@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else if (a == "General" || a == "Other") {
    //   let options = {
    //     from: "sunny.qin@piritahi.nz",
    //     to: "info@piritahi.nz",
    //     subject: subject,
    //     html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    // };
    //   return options 
    // } 
    // else {
    //     let options = {
    //         from: "sunny.qin@piritahi.nz",
    //         to: "info@piritahi.nz",
    //         subject: subject,
    //         html: `<b>Message sent from ${name}</b><br><br>${message}</br><br>${recipient}`,
    //     };
    //     return options 
    // }
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
