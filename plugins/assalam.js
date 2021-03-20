let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => m

let salam = /^(p?(unten|ermisi))$/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let vn ='src/ASSALAM.opus'
  if (isSalam) conn.sendFile(m.chat, vn, 'Assalam.opus','salam', m)
  return true
}

module.exports = handler
