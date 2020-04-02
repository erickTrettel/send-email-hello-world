const SendEmailService = require('../services/SendEmailService');

module.exports = {
  async sendEmail(req, res) {
    const { email: to } = req.body;

    try {
      const response = await SendEmailService.sendEmail(to);

      return res.status(200).json({ message: 'E-mail enviado com sucesso', data: response });
    } catch(e) {
      return res.status(500).json({ message: 'Erro ao enviar e-mail', error: e });
    }
  }
}