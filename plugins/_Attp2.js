const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
  await m.reply('Sedang membuat...')
  if (text) conn.sendFile(m.chat, 'http://lolhuman.herokuapp.com/api/attp?apikey=761e676c13e7710a48011b2b&text=' + encodeURIComponent(text), 'attp.webp', '', m, false, { asSticker: true })
  else throw 'Teksnya mbah?'
 // } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(attp2)$/i
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