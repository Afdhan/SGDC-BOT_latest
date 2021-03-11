let { execSync } = require('child_process')
let handler = async (m, { conn, text }) => {
 await m.reply('*_Memulai Ulang BOT..._*')
  if (global.conn.user.jid == conn.user.jid) {
 // conn.reply(m.chat, '*_Memulai Ulang BOT..._*', m)
    let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
    require('fs').readdirSync('plugins').map(v=>global.reload('', v))
    conn.reply(m.chat, stdout.toString(), m)
   }
}

handler.command = /^(restart|reload)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler

