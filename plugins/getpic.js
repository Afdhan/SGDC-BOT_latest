let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async (m, { conn, args }) => {
let usr = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted : m
let pp = conn.getProfilePicture(usr)
conn.sendFile(m.chat, pp, 'pp.jpg','Nehhh', m)
}
handler.command = /^(getpic)$/i
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