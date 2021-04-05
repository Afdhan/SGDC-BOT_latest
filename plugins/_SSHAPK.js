let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let handler = async (m, { conn, args }) => {
  let apk ='src/IPAN-SSH (SFILE.MOBI).apk'
await m.reply('```[ WAIT ] Aplikasi Sedang Dikirim! Silahkan Tunggu Sekitar 1-2 Menit```')
conn.sendFile(m.chat, apk, 'SGDC-BOT_IPAN-SSH.apk','ini', m)
}

handler.command = /^(apkssh)$/i
handler.fail = null

module.exports = handler
