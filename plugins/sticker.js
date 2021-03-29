const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  m.reply('*[ WAIT ]* _Sedang Diproses..._\nJangan Spam BOT Jika Delay Nya Lama!')
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Tipe Tidak Diketahui!'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
   else throw '*Kesalahan Pada Saat Mengonversi!*'
  }
}

handler.command = /^s(tic?ker)?(gif)?(wm)?(ticgif)?(ticwm)?$/i

module.exports = handler

