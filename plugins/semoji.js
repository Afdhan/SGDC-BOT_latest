const { sticker } = require('../lib/sticker')
const fetch = require('node-fetch')
let handler = async (m, { usedPrefix, conn, args, text }) => {
//  let [tipe, emoji] = text.includes('|') ? text.split('|') : args
let items = ["whatsapp", "microsoft", "google", "apple", "samsung", "twitter", "facebook", "joypixels", "openmoji", "emojidex", "lg", "htc", "mozilla"]
let tipe = items[Math.floor(Math.random() * items.length)]
let emoji = args[1]
  if (tipe && !emoji) {
    emoji = tipe
    tipe = defaultType
  }
  if (!emoji) throw '_Emojinya mana?_'
 await m.reply(global.wait)
//let [ayam, geprek] = text.split ` | `
 try {
emoji = emoji.trim()
tipe = tipe.trim().toLowerCase()
  let res = await fetch(global.API('xteam', '/sticker/emojitopng', { emo: emoji.trim() }, 'APIKEY'))
  if (!res.ok) throw res.text()
  let json = await res.json()
  if (!json.status) throw json
  let stiker = await sticker(null, json.result[tipe].img, global.packname, global.author, [emoji])
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(s?emoji)$/i

module.exports = handler
