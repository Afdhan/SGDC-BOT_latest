let handler = async (m, { conn }) => {

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async (m, { conn }) => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) 
      m.reply('*Link Group Terdeteksi! Anda Akan Dikeluarkan Otomatis Oleh SGDC-BOT*').then(() => {
      conn.groupRemove(m.chat, [user])
})
  return true
    }
}

module.exports = handler
