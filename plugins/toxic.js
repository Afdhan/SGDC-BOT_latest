let path = require('path')
let fs = require('fs')
let handler = m => m

let bad = fs.readdirSync(global.bad)
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isBadWord = bad.exec(m.text)
  if (chat.badWord && isBadWord) m.reply('Kata Toxic Terdeteksi! Anda Akan Dikeluarkan Otomatis Oleh SGDC-BOT')
  return true
}

global.bad = [
'anjing','kontol','bangsat',
'ngentot','ngewe','memek','tolol',
]

handler.botAdmin = true

handler.fail = null

module.exports = handler



