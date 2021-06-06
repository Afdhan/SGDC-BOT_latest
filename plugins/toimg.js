const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
//let { err } = require('syntax-error')
let handler = async (m, { conn }) => {
  if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!', m)
  await m.reply(global.wait)
 try {
  let q = { message: { [m.quoted.mtype]: m.quoted } }
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    let bufs = []
    let im = spawn('convert', ['webp:-', 'png:-'])
    im.on('error',e =>  conn.reply(m.chat, "```SYSTEM ERROR```\n\n" + util.format(e), m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
      conn.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, {
        quoted: m, caption: "*SGDC-BOT*"
      })
    })
  }
 } catch (e) { 
     m.reply('```Error```')
   }
}
//util.format(e)
handler.command = /^((to|st)?img)$/i
module.exports = handler
