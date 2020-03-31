import queue from '../lib/queue'
export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password,
    }

    //await queue.add('RegistrationMail', { user })
    //await queue.add('userReport', { user })
    /*queue.add('userReport', { user }, (job, err) => {
      console.log(err)
    })*/
    const teste = await queue.add('userReport', {
      user: user,
      settings: {
        backoffStrategies: {
          foo: function(attemptsMade, err) {
            if (err instanceof MySpecificError) {
              console.log('teste2')
              return 10000
            }
            console.log('teste')
            return 1000
          },
        },
      },
    })
    //console.log(teste)

    return res.json(user)
  },
}
