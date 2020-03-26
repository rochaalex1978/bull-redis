import 'dotenv/config'
import queue from 'bull'
import redisConfig from '../../config/redis'
import registrationMail from '../jobs/registratonMail'
console.log(redisConfig)
console.log(registrationMail.key)
const mailQueue = new queue(registrationMail.key, redisConfig)

export default mailQueue
