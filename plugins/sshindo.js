let util = require('util')
let path = require('path')
let fs = require('fs')
let { spawn } = require('child_process')
let handler = async (m, { conn, args }) => {
await m.reply(global.wait)
let thumb = fs.readFileSync("https://telegra.ph/file/2e6035d48c86dc776f17f.jpg")
try {
  let sshindo = 'src/SSH.png'
  await m.reply(global.wait)
  conn.sendFile(m.chat, sshindo, 'SSH_SGDC.png','Thank\'s to Damar', m, { thumbnail: thumb })
}catch (e){
	m.reply("```ERROR```")
	console.log (e)
   }
}
handler.command = /^(sshindo)$/i

module.exports = handler


