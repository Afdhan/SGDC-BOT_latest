let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 ANTI TOXIC 」*

Pengirim : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Pesan : ${m.text}

*Jangan Toxic!*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /anjing|kntl|asu|memek|kontol|goblok|goblog|bangsat|fuck|dick|pussy|ngentod|ngentot|ngentut|conetall/i
handler.command = new RegExp

module.exports = handler