const { MessageType } = require('@adiwajshing/baileys')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
const cw = getRandom('src/ciwi/.jpg')
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


const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
