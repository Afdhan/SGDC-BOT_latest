const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker2')
let handler  = async (m, { conn, args, command }) => {
   await m.reply(global.wait)
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      if (m.msg.seconds > 7) throw 'Durasi maksimal 7 detik'
      let img = await q.download()
      if (!img) throw '_Tipe Tidak Diketahui!_'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
   else throw '```Media Tidak Ditemukan!```'
    }
 }
  
handler.command = /^(s(tic?ker)?(gif)?|s(tic)?(gif)?)$/i

module.exports = handler

