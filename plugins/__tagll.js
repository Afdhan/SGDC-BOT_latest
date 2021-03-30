let handler = async (m, { conn, text }) => {

let member = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let tt = member.length
let jawab = `
*Siapa ${text}? Jawabannya si* @${member[tt].replace(/@.+/, '')}\n
`.trim()

    let mentionedJid = [tt]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid }})
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
