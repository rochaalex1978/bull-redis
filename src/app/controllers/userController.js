import mail from '../lib/mail'
export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password,
    }

    mail.sendMail({
      from: 'Teste de Queue <queue@queueteste.com.br>',
      to: `${name} <${email}`,
      subject: 'cadstro de usuario',
      html: `Olá, ${name}, bem vindo ao sistema de filas da Rocketseat :D`,
    })

    return res.json(user)
  },
}
