const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');

const client = new Client({
    puppeteer: {
        headless: false,
        // args: [
        //     '--no-sandbox',
        // ],

    },
    authStrategy : new LocalAuth({
        clientId: 'client',
    }),
});

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('auth_failure', () => {
    console.log('Auth failure');
})

client.on('authenticated', (session) => {
    console.log('Authenticated');
})

client.on('message', async msg => {
    console.log(msg.body);
    console.log(msg.from);
    console.log(msg.author);

    if (msg.type == 'ptt') {
        console.log("Voice Clip Received");
    
        const media = await msg.downloadMedia().
            then((data) => {
    
                const binaryData = Buffer.from(data.data, 'base64');
                fs.writeFile('audio.ogg', binaryData, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("File saved");
                    }
                })
            });      
    }
});


client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
})

client.initialize();
 