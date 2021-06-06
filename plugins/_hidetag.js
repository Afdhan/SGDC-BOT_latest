const { MessageType } = require("@adiwajshing/baileys")
let handler = async (m, { conn, args }) => {
   let jumlah = args[0]
   if (jumlah && isNaN(jumlah)) return m.reply("Angka Aja Om :/");
   if (jumlah && Number(jumlah) > 50) return m.reply("Jumlah Kebanyakan :v\nMaksimal 50")
   if(!jumlah) jumlah = 5
   args.shift()
   let pesan = args.join(' ')
   if (!pesan) pesan = "SGDC-BOT"   
   let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
   for(let i = 0; i < jumlah; i++) {
        conn.sendMessage(m.chat, pesan, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
       }
 }
handler.command = /^htag$/i
handler.premium = false
module.exports = handler

// by M AFDHAN
