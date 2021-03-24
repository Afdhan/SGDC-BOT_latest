let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('*[ WAIT ]* _Searching..._')

    axios.get('https://videfikri.com/api/tebakgambar')
    .then((res) => {
      imageToBase64(res.data.result.soal_gbr)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `_Apa Hayoo_`

     conn.sendFile(m.chat, buf, 'TG.jpg', str, m)
        })
    })
}

handler.command = /^(tebakgambar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
