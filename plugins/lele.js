let handler = async (m, { conn, args }) => {
  await conn.groupLeave(m.chat)
}

handler.command = /^lol$/i
handler.owner = true

handler.fail = null
handler.limit = false

module.exports = handler
