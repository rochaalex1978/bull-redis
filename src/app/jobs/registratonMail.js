import mail from '../lib/mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data
    await mail.sendMail({
      from: 'Teste de Queue <queue@queueteste.com.br>',
      to: `${user.name} <${user.email}`,
      subject: 'cadastro de usuario',
      html: `Olá, ${user.name}, bem vindo ao sistema de filas da Rocketseat :D`,
    })
  },
}
