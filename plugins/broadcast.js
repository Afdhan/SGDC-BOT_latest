let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.array.filter(v => !v.read_only && v.message).map(v => v.jid)
  for (let id of chats) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n\n*[ • SGDC-BOT • ]*')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `*_Mengirim pesan broadcast ke ${chats.length} chat_*`, m)
}

handler.command = /^(broadcast|bc)$/i
handler.rowner = true

handler.fail = null

module.exports = handler

/*
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/
