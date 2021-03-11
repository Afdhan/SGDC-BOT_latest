let util = require('util')
let path = require('path')

let { spawn } = require('child_process')


let handler = async (m, { conn, args }) => {
await m.reply('*[ • WAIT • ]* _Media Sedang Dikirim..._')
let ciwi = pickRandom('src/ciwi')
let img = path.join(ciwi pickRandom(fs.readdirSync(ciwi)))
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


