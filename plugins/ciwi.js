let util = require('util')
let path = require('path')

let { spawn } = require('child_process')


let handler = async (m, { conn, args }) => {
await m.reply('*[ • WAIT • ]* _Media Sedang Dikirim..._')
//let ciwi = pickRandom('./src/ciwi/\.jpg')
let ciwi = path.join(pickRandom(fs.readdirSync('src/ciwi')))
conn.sendFile(m.chat, ciwi, 'RandomCewe.jpg','Jangan Dijadiin Bacol!', m)
}


handler.command = /^(ciwi)$/i
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


