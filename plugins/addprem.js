const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async(m, { conn, text, participants, isPrems }) => {
let who
  if (m.isGroup) who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  if (!who) throw 'Tag orang yang akan dijadikan premium!'
 // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  let user = `${who.split("@s.whatsapp.net")[0]}`
  let up = global.prems.push(user)
  fs.writeFileSync('./config.js',JSON.stringify(up))
    m.reply(`*_Berhasil Add User Premium!_*\n*Nomor:* wa.me/${who.split("@s.whatsapp.net")[0]}`)
 // } else m.reply('Ada nomor host disini...')
}

handler.command = /^(addprem|prem|addprems)$/i
handler.rowner = true

module.exports = handler
