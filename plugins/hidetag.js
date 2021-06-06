let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat, args.join` `, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
}
handler.command = /^(hidetag)$/i
handler.group = true
handler.admin = true

module.exports = handler

