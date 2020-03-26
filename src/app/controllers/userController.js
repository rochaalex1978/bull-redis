import queue from '../lib/queue'
export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password,
    }

    await queue.add({ user })

    return res.json(user)
  },
}
