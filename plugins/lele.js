let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
 let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  await conn.sendMessage(m.chat, `_Selamat Tinggal Semuanya :v_`, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
 //await m.reply('_Selamat Tinggal Semuanya :v_')
 conn.groupLeave(m.chat)
}

handler.command = /^(leave|out)$/i
handler.rowner = true
handler.group = true
handler.fail = null


module.exports = handler
