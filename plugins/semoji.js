
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
let [tipe, emoji] = text.split `|`
 try {
  if (!tipe) throw '_Silahkan masukan tipe emoji! Misal *!semoji whatsapp*_'
  if (!emoji) throw 'Emoji?'
  let stiker = await sticker(null, global.API('xteam', '/sticker/emojitopng' + tipe, { emo: emoji }, 'APIKEY'), global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('_Terjadi Kesalahan!_')
  }
}

handler.command = /^(semoji)$/i

handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler