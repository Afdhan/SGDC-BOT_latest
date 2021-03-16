let Regex = require('url-regex')
let handler = m => 
let bad = /(anjing|kontol|bangsat|ngentot|ngewe|memek|tolol|pepek|goblo|gblk|ngeue|kntl|jancok|ajg|asu|ngntd|bgsd|bgst)/i
/*let users = m.sender.filter(u => !(u.includes(conn.user.jid)))
  for (let user of users) await conn.groupRemove(m.chat, [user])*/
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isBadWord = bad.exec(m.text)
  if (chat.badWord && isBadWord)
    m.reply(`
 *[ ANTI BADWORD ]*
            
 _Tolong Gausah Sok Toxic Mastah!_
 `.trim())
  return true
     
}

/*function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}*/


module.exports = handler



