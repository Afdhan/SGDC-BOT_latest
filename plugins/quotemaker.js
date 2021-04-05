let axios = require("axios");
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async(m, { conn, text }) => {
 await m.reply('*[ WAIT ]* _Sedang Diproses..._')
  let quot = 'https://api.xteam.xyz/quotemaker?text=' + text + '&wm=SGDC-BOT&APIKEY=abbace4a347f'
conn.sendFile(m.chat, quot, 'SGDC-BOT.jpg', '*[ • SGDC-BOT • ]*', m)

 }

handler.command = /^(quote(maker)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN
module.exports = handler
