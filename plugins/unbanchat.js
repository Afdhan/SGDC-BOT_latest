let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Done...!')
}

handler.command = /^(unbanchat|unban)$/i
handler.owner = true

module.exports = handler
