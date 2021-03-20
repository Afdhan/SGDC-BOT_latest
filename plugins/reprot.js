const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '_Masukkan Text Laporan!_', m)
    if (text > 300) return conn.reply(m.chat, 'Teks Terlalu Panjang!, Maksimal 300 Karakter', m)
    var nomor = m.sender
    const teks1 = `*[[[ • BUG REPORT • ]]]*\n\n*Nomor:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Laporan:* ${text}\n\n*[ • SGDC-BOT •  ]*`
    conn.sendMessage('6282252655313@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '*[ SUKSES ]* _Masalah telah di laporkan ke_ *Owner BOT!*', m)
}

handler.command = /^(bug|report|bugreport)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
