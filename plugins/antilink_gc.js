let handler = (m, { conn, isBotAdmin }) => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin, conn }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiLink && isGroupLink && m.isGroup) {
  let ajg = m.sender
  if (isAdmin) return m.reply('_Kali ini anda aman! Karena anda adalah Admin !!!_')
  conn.reply(m.chat, `
*[ CHAT ANTI LINK ]*

_Terdeteksi *@${ajg.split("@")[0]}* telah mengirim link group!_

Maaf Kamu akan dikick oleh *SGDC-BOT*
`.trim(), m, { 
   contextInfo: { 
     mentionedJid: [ajg]
   } 
 })
 if(isBotAdmin) { 
   conn.groupRemove(m.chat, [ajg])
    } else if (!isBotAdmin) return m.reply('_Jadikan SGDC-BOT Sebagai Admin, Agar Bisa Bertindak !!!_')
   }
    return true
 }


module.exports = handler
