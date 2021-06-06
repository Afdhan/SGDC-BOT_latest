let { execSync } = require('child_process')
let handler = async (m, { conn, text, isROwner }) => {
 await m.reply('```Sedang Merestart SGDC-BOT...```')
  if (global.conn.user.jid == conn.user.jid) {
   /* let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
    require('fs').readdirSync('plugins').map(v=>global.reload('', v))
   */
    let stdout = execSync('git remote set-url origin https://github.com/Afdhan/scbot.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    conn.reply(m.chat, '*Info Server:*\n\n' + stdout.toString() + '\n\n*SGDC-BOT*', m)
   }
}

handler.command = /^(restart|reload)$/i
handler.owner = true

module.exports = handler

