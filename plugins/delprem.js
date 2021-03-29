let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw '_Usernya Mana?_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '_Tag salah satu mbah!_'
    let users = global.DATABASE._data.users
    users[who].prem = false
    var nomor = m.mentionedJid[0]
    m.reply(`*_Berhasil Menghapus User!_*\n*Nomor : https://wa.me/${nomor.split("@s.whatsapp.net")[0]}*`)

}

handler.command = /^delprem$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


