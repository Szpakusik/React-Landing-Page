var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

// Basic info from extended form
router.post('/send', (req, res, next) => {


  const brideFirstName = req.body.brideFirstName;
  const brideLastName = req.body.brideLastName;
  const groomFirstName = req.body.groomFirstName;
  const groomLastName = req.body.groomLastName;
  const phone1 = req.body.phone1;
  const email1 = req.body.email1;
  const phone2 = req.body.phone2;
  const email2 = req.body.email2;
  const budget = req.body.budget;
  const guestNumber = req.body.guestNumber;

  var content = `Panna Młoda: ${brideFirstName} ${brideLastName} \nPan Młody: ${groomFirstName} ${groomLastName} \nBudżet: ${budget}\nLiczba Gości: ${guestNumber}\n\n`

  console.log(phone1, email1, phone2, email2)

  if(phone1) content += `Numer Panny Młodej: ${phone1} \n`
  if(email1) content += `Email Panny Młodej: ${email1} \n\n`

  if(phone2) content += `Numer Pana Młodego: ${phone2} \n`
  if(email2) content += `Email Pana Młodego: ${email2} `

  var mail = {
    from: `${brideFirstName} ${brideLastName} i ${groomFirstName} ${groomLastName} `,
    to: 'info@msweddingplanner.pl',  //Change to email address that you want to receive messages on
    subject: `Podstawowe informacje od ${brideFirstName} ${brideLastName} i ${groomFirstName} ${groomLastName} `,
    text: content,
  }
  console.log(mail);

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})
// Advanced info from extended form
router.post('/send2', (req, res, next) => {

  console.log('HUJEC');
  const brideFirstName = req.body.brideFirstName;
  const brideLastName = req.body.brideLastName;
  const groomFirstName = req.body.groomFirstName;
  const groomLastName = req.body.groomLastName;
  const weddingDate = req.body.weddingDate;
  const weddingType = req.body.weddingType;
  const weddingPlace = req.body.weddingPlace;
  const weddingSpot = req.body.weddingSpot;
  const weddingExtras = req.body.weddingExtras;
  const partyPlace = req.body.partyPlace;
  const partySpot = req.body.partySpot;
  const partyRange = req.body.partyRange;
  const partyExtras = req.body.partyExtras;
  const additionalMessage = req.body.additionalMessage;
  const additionalExtras = req.body.additionalExtras;

  var content = `Data ślubu: ${weddingDate} \nTyp ślubu: ${weddingType} \nMiejscowość w której odbędzie się ślub: ${weddingPlace}\nMiejsce wesela: ${weddingSpot} \n${weddingExtras}
  \nMiejscowość w której odbędzie się wesele: ${partyPlace}\nMiejsce wesela: ${partySpot}\nTolerowana odległość uroczystości od miejsca ślubu: ${partyRange} \n${partyExtras}
  \nDodatkowa wiadomość: \n${additionalMessage}\n${additionalExtras}`

  var mail = {
    from: `${brideFirstName} ${brideLastName} i $${groomFirstName} ${groomLastName}`,
    to: 'info@msweddingplanner.pl',  //Change to email address that you want to receive messages on
    subject: `Szczegóły od ${brideFirstName} ${brideLastName} i ${groomFirstName} ${groomLastName}`,
    text: content,
  }
  console.log(mail)

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})
// Advanced info from extended form
router.post('/send3', (req, res, next) => {

  const name= req.body.name;   
  const email= req.body.email;  
  const message= req.body.message;

  var content = ` Imię i nazwisko: ${name} \nEmail: ${email} \nWiadomość:\n ${message}`

  var mail = {
    from: `${name}`,
    to: 'info@msweddingplanner.pl',  //Change to email address that you want to receive messages on
    subject: `Wiadomość z formularza od ${name}`,
    text: content,
  }
  console.log(mail)

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})
module.exports = router;