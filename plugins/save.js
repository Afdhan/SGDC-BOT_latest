let handler = function (m, { conn, text }) {
	let txt = text
	let nomor = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
	if (!txt) txt = this.getName(nomor)
    if (txt.length > 15) return conn.reply(m.chat, '_Nama Kepanjangan!_', m)
    this.sendContact(m.chat, nomor.split("@s.whatsapp.net")[0], `${text}`, m)
}

handler.command = /^(save(me)?)$/i

module.exports = handler

 // MUHAMMAD AFDHAN
