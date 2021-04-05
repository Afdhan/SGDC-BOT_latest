let axios = require("axios");
let handler = async(m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) { 
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://api.xteam.xyz/randomimage/hentai?APIKEY=abba3ce4a347f'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', 'Mending lu tobat dah :v\n\n*[ • SGDC-BOT • ]*', m)
    } else if (!chat.nsfw) return m.reply('```Perlu Mengaktifkan Mode NSFW```')
}

handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler