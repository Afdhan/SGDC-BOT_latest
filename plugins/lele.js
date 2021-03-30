let handler = async (m, { conn, args }) => {
  await conn.groupLeave(m.chat)
}

handler.command = /^lol$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
