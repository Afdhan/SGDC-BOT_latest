let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
_${conn.getName(m.sender)} Sekarang AFK!_\nKarena${text ? ': ' + text : ''}
`)
}

handler.command = /^afk$/i

module.exports = handler
