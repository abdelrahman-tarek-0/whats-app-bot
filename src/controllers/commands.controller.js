
exports.commands = (message) => {
    const body = message.body

    if (body.startsWith('!')) {
        return null
    }else if (body === '!ping'){
        message.reply('pong')
    }else if (body === '!help'){
        message.reply('!ping, !help', '!ip')
    }
}