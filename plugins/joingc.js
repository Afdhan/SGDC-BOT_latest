const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, args, text }) => {
   if(!text) return conn.reply(m.chat, 'Masukkan link undangan grup!', m)
  /* if(!text = 'https://chat.whatsapp.com/([0-9A-Za-z]{20,24})') return conn.reply(m.chat, 'Link Tidak Valid!', m)
   if(text == 'https://chat.whatsapp.com/([0-9A-Za-z]{20,24})') return*/
    var nomor = m.sender
    const teks1 = `*[ UNDANGAN GROUP ]*\n*DARI:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*LINK:* ${text}`
    conn.sendMessage('6282252655313@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '_Mengirim Permintaan Ke Owner..!_\n\n*BOT akan join ketika permintaan telah dikonfirmasi oleh Owner!*', m)
 /*} else {
     conn.reply(m.chat, '*MASUKKAN LINK YANG VALID!*', m)
     }*/
 }
handler.command = /^(join(gc)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
