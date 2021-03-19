let handler = async (m, { conn, args }) => m

let salam = /ayam/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let who = m.sender
  let user = m.sender.filter(u => !(u == who || u.includes(conn.user.jid)))
  if (isSalam) conn.reply(m.chat, 'KICK', m)
  conn.groupRemove(m.chat, [user])
  return true
}

module.exports = handler
