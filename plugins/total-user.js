let handler = async (m, { conn, args, text }) => {
  let users = Object.keys(global.DATABASE._data.users)
  let data = "*TOTAL USERS DATABASE*\n\n"
  for (let i = 0; i < users.length; i++) {
  	data += `*>* @${users[i].split("@")[0]}\n`
  }
    data += `\n\`\`\`Total:\`\`\` *${users.length}*\n`
    data += "\n\n*SGDC-BOT*"
     conn.reply(m.chat, data, m, { contextInfo: { mentionedJid: users }})
 }
 
handler.command = /^((data|total)(base|user)?)$/i
module.exports = handler
