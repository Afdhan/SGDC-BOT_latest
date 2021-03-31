let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {

let user = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
//let tt = member.length
let b =  user.split('@s.whatsapp.net')[0]
/*let jawab = `
*Siapa ${text}? Jawabannya si* @${member[tt].m.replace(/@.+/, '')}\n
`.trim()*/
conn.sendMessage(m.chat, `@${b}`, MessageType.extendedText, { contextInfo: { mentionedJid: user } })
    //let mentionedJid = [tt]
    //ggconn.reply(m.chat, b, m, { contextInfo: { mentionedJid }})
}

handler.command = /^tes$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
