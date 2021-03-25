let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text }) => {
let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 let [teks, wm] = text.split('|')
await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text, wm: conn.getName(m.sender) }, 'APIKEY=abba3220ce4a347f'), 'SGDC.jpg', '*[ • SGDC-BOT • ]*', m)
//m.reply('Apikeynya gaada mbah!')
 }

handler.command = /^quotemaker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
