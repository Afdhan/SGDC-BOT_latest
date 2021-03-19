let handler = async (m, { conn, args }) => m

let salam = /ayam/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let who = m.sender
  let users = m.sender.filter(u => !(u == who || u.includes(conn.user.jid)))
  if (isSalam) conn.reply(m.chat, 'KICK', m)
  for (let user of users) await conn.groupRemove(m.chat, [user])
  return true
}

module.exports = handler