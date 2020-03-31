import 'dotenv/config'
import express from 'express'
import userController from './app/controllers/userController'
import bullBoard from 'bull-board'
import queue from './app/lib/queue'

const app = express()

bullBoard.setQueues(queue.queues.map(queue => queue.bull))

app.use(express.json())

app.post('/users', userController.store)

app.use('/admin/queue', bullBoard.UI)
app.listen(3333, () => {
  console.log('logado na porta 3333')
})
