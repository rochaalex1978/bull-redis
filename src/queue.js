import queue from './app/lib/queue'
import registrationMail from './app/jobs/registratonMail'

queue.process(registrationMail.handle)
