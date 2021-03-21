let Regex = require('url-regex')
let handler = m => m
let bad = /(anjing|kontol|bangsat|ngentot|ngewe|memek|tolol|pepek|goblok|goblog|gblk|ngeue|kntl|jancok|ajg|ajglah|asu|ngntd|bgsd|kntod|kntd|bgst)/i

handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isBadWord = bad.exec(m.text)
  if (chat.badWord && isBadWord)
    m.reply(`
 *[ ANTI BADWORD ]*
            
 _AMPUN BANG JAGO :(_

*_Nanti Kalau Dikick Jangan Protes!!_*
`.trim())
  return true    
}


module.exports = handler



