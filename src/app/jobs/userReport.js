import mail from '../lib/mail'

export default {
  key: 'userReport',
  options: {
    delay: 5000,
    repeat: {
      every: 1000,
      limit: 2,
    },
  },
  async handle({ data }) {
    const { user2 } = data
    console.log(user)
  },
}
