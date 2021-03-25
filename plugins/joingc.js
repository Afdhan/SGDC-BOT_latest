const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan link undangan grup!', m)
  //  if (text > 10) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ UNDANGAN GROUP ]*\n*DARI:* wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*LINK:* ${text}`
    conn.sendMessage('62895337278647@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '_Mengirim Permintaan Ke Owner..!_\n*BOT akan join ketika permintaan telah dikonfirmasi oleh Owner!*', m)
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
