let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '_Siapa yang mau di banned?_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '_Tag salah satu mbah!_'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `*_Berhasil Dibanned!_*`, m)
}

handler.command = /^bann$/i
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


