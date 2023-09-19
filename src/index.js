const { Client, LocalAuth } = require('whatsapp-web.js')
const fs = require('fs')

const client = new Client({
   puppeteer: {
      headless: true,
   },
   authStrategy: new LocalAuth({
      clientId: 'client',
   }),
})


client.on('ready', () => {
   console.log('Client is ready!')
})

client.on('auth_failure', () => {
   console.log('Auth failure')
})

client.on('authenticated', (session) => {
   console.log('Authenticated')
})

client.on('message', async (msg) => {
   console.log(msg.body)
   console.log(msg.from)

   const number = '+20 106 036 6026'
   const sanitized_number = number.toString().replace(/[- )(]/g, '') // remove unnecessary chars from the number
   const final_number = `20${sanitized_number.substring(
      sanitized_number.length - 10
   )}` 

   console.log(msg.author);


})

client.on('disconnected', (reason) => {
   console.log('Client was logged out', reason)
})

client.initialize()