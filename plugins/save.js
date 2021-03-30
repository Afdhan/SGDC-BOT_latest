let handler = function (m, { conn, text }) {
	if (!text) return conn.reply(m.chat, 'Namanya Siapa?', m)
	if (text > 15) return conn.reply(m.chat, 'Nama Kepanjangan!', m)
var no = m.sender
let nom = no.split("@s.whatsapp.net")[0]
    this.sendContact(m.chat, `${nom}`, `${text}`, m)


handler.command = /^(save(me)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

 // MUHAMMAD AFDHAN