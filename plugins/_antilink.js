let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let users = global.DATABASE._data.users[m.sender]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) m.reply('_Link Group Terdeteksi! Anda Akan Dikeluarkan Otomatis Oleh SGDC-BOT_')
  await conn.groupRemove([users])
  return true
}

module.exports = handler
