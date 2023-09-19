const { v4 } = require('public-ip')

exports.commands = async (message) => {
   const body = message.body
   console.log('command')

   if (body === '!ping') {
      console.log('pong')
      message.reply('pong')
   } else if (body === '!help') {
      console.log('!ping, !help', '!ip')
      message.reply(`!ping, !help, !ip`)
   } else if (body === '!ip') {
      const ip = await v4()
      console.log(`${ip}`)
      message.reply(`${ip}`)
   }
}
