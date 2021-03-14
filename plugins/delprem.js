const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verivikasi !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = false
  var nomor = m.sender
    m.reply(`*Done berhasil added User✅*\n\n*Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expired:* 30Days\n*Thanks For Added Premium !*`)
  // } else m.reply('Ada nomor host disini...')
}

handler.command = /^delprem$/i
handler.rowner = false
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


