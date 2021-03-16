let path = require('path')
let fs = require('fs')
let handler = m => m
let bad = fs.readdirSync(bad)
let AFDHN = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  if (bad.includes(AFDHN))
  let chat = global.DATABASE.data.chats[m.chat]
  let isBadWord = bad.exec(m.text)
  if (chat.badWord && isBadWord) m.reply('*_No Toxic_*')
  return true
}

bad = [
'anjing','kontol','bangsat',
'ngentot','ngewe','memek','tolol',
]

handler.botAdmin = true

handler.fail = null

module.exports = handler



