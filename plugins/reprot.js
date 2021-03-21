const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '_Masukkan Text Laporan!_', m)
    if (text > 200) return conn.reply(m.chat, 'Teks Terlalu Panjang!, Maksimal 200 Karakter', m)
    let name = conn.getName(m.sender)
    var nomor = m.sender
    const reprot = `
*╭══════[ REPORT ]══════╮*
*• Nama:* ${name}
*• Nomor:* wa.me/${nomor.split("@s.whatsapp.net")[0]}
*• Laporan:* ${text}
*╰═════════════════╯*
`.trim()
    conn.sendMessage('6282252655313@s.whatsapp.net', reprot, MessageType.text)
    conn.reply(m.chat, '*[ SUKSES ]* _Masalah telah di laporkan ke_ *Owner Bot!*', m)
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