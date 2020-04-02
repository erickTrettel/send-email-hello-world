const nodemailer = require('nodemailer');

function sendEmail(to) {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = createTransporter();

      let mailOptions = {
        from: '"Hello Email" <naoresponda.helloworld@gmail.com>',
        to,
        subject: "Este é um e-mail teste, por favor não responda",
        text: "O envio de e-mail está funcionando",
        html: `
          <p>Este e-mail é um teste de envio de e-mail com nodemailer utilizando protocolo OAuth2.</p>
        `
      }
      
      let info = await transporter.sendMail(mailOptions)

      resolve(info);
    } catch (e) {
      reject(e);
    }
  })
}

function createTransporter() {
  let auth = {
    type: 'oauth2',
    user: 'naoresponda.helloworld@gmail.com',
    clientId: process.env.GOOGLE_OAUTH2_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_OAUTH2_REFRESH_TOKEN,
  }

  return nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    secure: false,
    auth
  })
}

module.exports = {
  sendEmail
}
