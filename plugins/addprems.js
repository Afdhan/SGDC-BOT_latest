let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    /*if (!text) throw '_Usernya Mana?_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '_Tag salah satu mbah!_'*/
    let user = global.DATABASE._data.users[m.mentionedJid[0]]
    user.prem = true
    var nomor = m.sender
    m.reply(`*_Berhasil Menambahkan User!_*\n*Nomor : https://wa.me/${nomor.split("@s.whatsapp.net")[0]}*`)

}

handler.command = /^addprem$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


