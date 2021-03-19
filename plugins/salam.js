//let { WAConnection, WA_MESSAGE_STUB_TYPES } = require('@adiwajshing/baileys')
//let simple = require('./lib/simple')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
//let WAConnection = simple.WAConnection(_WAConnection)
//let conn = new WAConnection()

let handler = async (m, { conn, args }) => m

let salam = /assalamualaikum|salam/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isSalam = salam.exec(m.text)
  let vn ='src/SALAM.opus'
  if (isSalam) m.sendFile(vn, 'Waalaikumsalam.opus','salam')
  return true
}

module.exports = handler
