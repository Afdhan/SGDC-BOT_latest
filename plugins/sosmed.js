let util = require('util')
let path = require('path')

let { spawn } = require('child_process')


let handler = async (m, { conn, args }) => {
  let axissosmed ='src/twitter.hc'
await conn.reply(m.chat, `
*╭════[DESCRIPTION]════╮*
*┏════════════════*
*║•  Title : AXIS Sosmed*
*║•  Ekstensi : hc*
*║•  Aplikasi : HTTP Custom*
*║•  Version : HC 239 (Playstore)*
*║•  Expires : LifeTime*
*║•  Mode : SSH / SSL*
*║•  Note : Ganti SSH*
*┣════════════════*
*║ [ • WAIT • ]* _Config Sedang Dikirim..._
`.trim(), m)
conn.sendFile(m.chat, axissosmed, 'AXIS Sosmed.hc','ini', m)
}

handler.command = /^(axissosmed)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
