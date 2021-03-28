const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [nmr, psn] = text.split `|`

    if (!nmr) return conn.reply(m.chat, 'Silahkan masukan nomor whatsapp yang ingin dispam', m)
    if (!psn) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    let kr = `${nmr}`
 //   var nmor = m.mentionedJid[0]
    var nomr = m.sender
    let s1 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s2 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s3 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s4 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s5 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s6 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s7 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s8 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s9 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s0 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s11 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s12 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s13 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s14 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`
    let s15 = `*「 WhatsApp Spammer 」*\n\n*Dari:* wa.me/${nomr.split("@s.whatsapp.net")[0]}\n*Pesan:* ${psn}\n\n*[ • SGDC-BOT • ]*`


    conn.sendMessage(kr + '@s.whatsapp.net', s1, MessageType.text)                                                                                                                                                                                                          conn.sendMessage(korban + '@s.whatsapp.net', spam2, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s2, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s3, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s4, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s5, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s6, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s7, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s8, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s9, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s0, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s11, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s12, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s13, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s14, MessageType.text)
    conn.sendMessage(kr + '@s.whatsapp.net', s15, MessageType.text)



    let logs = `_Berhasil mengirim pesan spam ke nomor ${kr} sebanyak 15 kali_`
    conn.reply(m.chat, logs, m)
}

handler.command = /^(spam|spamwa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler