let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	if (!text) return conn.reply(m.chat, 'Masukkan nama motor!', m)
	  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
	axios.get(`https://api.vhtear.com/infomotor?merk=${text}&apikey=NOT-PREMIUM`)
        .then((res) => {
      imageToBase64(res.data.result.image)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let mbl = `
*Title:* ${res.data.result.title}
*Harga:* ${res.data.result.harga}
*Kekurangan:* ${res.data.result.kekurangan}
*Kelebihan:* ${res.data.result.kelebihan}
*Spesifikasi:* ${res.data.result.spesifikasi}

*[ • SGDC-BOT • ]*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', mbl, m)
        })
    })
}
  
handler.command = /^(infomotor)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler