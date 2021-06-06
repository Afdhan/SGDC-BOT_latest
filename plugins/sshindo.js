let util = require('util')
let path = require('path')
let fs = require('fs')
let { spawn } = require('child_process')
let handler = async (m, { conn, args }) => {
await m.reply(global.wait)
let thumb = fs.readFileSync("./src/SGDC-BOT.jpg")
try {
  let sshindo = 'src/SSH.png'
  await m.reply(global.wait)
  conn.sendFile(m.chat, sshindo, '','Thank\'s to Damar', m, { thumbnail: thumb })
}catch (e){
	m.reply("```ERROR```")
	console.log (e)
   }
}
handler.command = /^(sshindo)$/i

module.exports = handler


