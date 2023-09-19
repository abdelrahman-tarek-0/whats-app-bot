const { v4 } = require('public-ip')

exports.commands = async (message) => {
   const body = message.body

   if (body.startsWith('!')) {
      return null
   } else if (body === '!ping') {
      message.reply('pong')
   } else if (body === '!help') {
      message.reply('!ping, !help', '!ip')
   }else if (body === '!ip') {
        const ip = await v4()
        message.reply(ip)
   }
}
