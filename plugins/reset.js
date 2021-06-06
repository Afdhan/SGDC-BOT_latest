let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('_Sedang Mereset SGDC-BOT')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '```:v```'
}

handler.command = /^(reset)$/i
handler.owner = true

module.exports = handler

