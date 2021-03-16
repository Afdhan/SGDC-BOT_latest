const { MessageType } = require('@adiwajshing/baileys')

let handler = async function (m, { conn, text }) => {
var nomor = m.sender
m.reply(`*Nomor:* https://wa.me/${nomor.split("@s.whatsapp.net")[0]}&send?text=${text}/`)


handler.command = /^wame$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
