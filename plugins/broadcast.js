let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  let content = await conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n\n*「 SGDC-BOT 」*')
  for (let id of chats) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}

handler.command = /^(broadcast|bc)$/i
handler.owner = true

handler.fail = null

module.exports = handler

/*
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/
