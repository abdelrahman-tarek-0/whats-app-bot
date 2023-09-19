const { Client, LocalAuth } = require('whatsapp-web.js')
const fs = require('fs')

const { serialize } = require('./helpers/number-serialize.js')
const { checkNumber } = require('./helpers/check-number.js')
const { commands } = require('./controllers/commands.controller.js')

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
   const number = serialize(msg.from)
   const isOkay = checkNumber(number)

   if (!isOkay) return

   return await commands(msg)
})

client.on('disconnected', (reason) => {
   console.log('Client was logged out', reason)
})

client.initialize()
