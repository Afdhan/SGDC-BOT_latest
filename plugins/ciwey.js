let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
      let cw = getRandom('src/ciwi/.jpg')
conn.sendFile(m.chat, cw, 'CECAN.jpg','No Bacol:v', m)
}

handler.command = /^(axisconference)$/i
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