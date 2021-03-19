let handler = async (m, { conn, args }) => m

let salam = /ayam/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let who = m.sender(salam)
  let user = who || u.includes(conn.user.jid)
  if (isSalam) conn.reply(m.chat, 'KICK', m)
  await conn.groupRemove(m.chat, [user])
  return true
}

module.exports = handler
