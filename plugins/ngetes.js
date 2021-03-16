const { MessageType } = require('@adiwajshing/baileys')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler = async(m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  
conn.reply(m.chat, '*Nomor:* https://wa.me/${who.split`@`[0]}', m)
}

handler.command = /^wame$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
