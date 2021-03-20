const { MessageType } = require('@adiwajshing/baileys')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
let cw = conn.getFile ${getRandom('src/ciwi/.jpg')}
conn.sendFile(m.chat, cw, 'CECAN.jpg','No Bacol:v', m)
}

handler.command = /^(ciwi|ciwey|cecan)$/i
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


function getRandom(ext) {
    return ext[Math.floor(Math.random() * ext.length)]
}
