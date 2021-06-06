const uploadImage = require('../lib/uploadImage')
const { sticker } = require("../lib/sticker")
const { MessageType } = require('@adiwajshing/baileys')
const kntl = require("../src/kntl.json")
let handler = async (m, { conn, text }) => {
        await m.reply(global.wait)
	let api = (kntl.lolkey2)
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Foto?'
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Foto Aja Om :)`)
  let img = await q.download()
  let url = await uploadImage(img)
  let link = "https://api.lolhuman.xyz/api/removebg?apikey=" + api + "&img=" + url;
  let stiker = await sticker(null, link, global.packname, global.author);
   conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('```Error```')
   console.error(e)
  }
}

handler.command = /^(s(tic?ker)?nobg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
