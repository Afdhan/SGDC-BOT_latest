let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
  if (!m.isGroup) {
    await conn.sendContact(m.chat, '6282252655313', 'M AFDHAN', m)
    conn.sendContact(m.chat, '6283129011845', 'NezaVPN', m)
} else {
  let users1 = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  let users2 = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  await conn.sendContact(m.chat, '6282252655313', 'M AFDHAN', m, { contextInfo: { mentionedJid: users1 } })
  conn.sendContact(m.chat, '6283129011845', 'NezaVPN', m, { contextInfo: { mentionedJid: users2 } })
  }
}

handler.command = new  RegExp
handler.customPrefix = /^(owner|creator|pemilik)$/i
module.exports = handler
