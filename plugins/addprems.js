const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verivikasi !'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.mentionedJid[0]
    m.reply(`*_Berhasil Menambahkan User!_*\n\n*Nomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}*`)
  // } else m.reply('Ada nomor host disini...')
}

handler.command = /^addprem$/i
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


