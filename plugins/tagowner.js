let handler = async (m, { conn, text }) => {
    //let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let own = '6282252655313@s.whatsapp.net'
  conn.reply(m.chat, `_Ngapain Manggil Owner @${own.split("@")[0]}?_`, m, { 
      contextInfo: { 
          mentionedJid: [own] 
      } 
  })
    //let mentionedJid = [m.sender]
}
handler.customPrefix = /^(@꧁࿇ ᴍ ᴀꜰᴅʜᴀɴ ࿇꧂|@꧁࿇ M AFDHAN ࿇꧂|Afdhan|afdan|afdhan)$/i
handler.command = new RegExp

module.exports = handler
