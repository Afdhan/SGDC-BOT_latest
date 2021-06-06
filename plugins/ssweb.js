const { MessageType } = require("@adiwajshing/baileys")
let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
	await m.reply(global.wait)
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, 'Link nya mana mbah?', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let sss = await fetch('https://nurutomo.herokuapp.com/api/ssweb?delay=1000&url=' + encodeURIComponent(url) + '&full=' + full)
  let ss = await sss.buffer()
  conn.sendFile(m.chat, ss, "SS.jpg", url + '\n\n*SGDC-BOT', m)
  
}

handler.command = /^(ss(web)?(f)?)$/i
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

