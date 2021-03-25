let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

 if (!text) return conn.reply(m.chat, 'Masukkan Username Instagram', m)
  await m.reply('*[ WAIT ]* _Searching..._')

    axios.get(`https://mhankbarbar.herokuapp.com/api/stalk?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*Nama:* ${res.data.Name}
*Username:* ${res.data.Username}
*Followers:* ${res.data.Jumlah_Followers}
*Following:* ${res.data.Jumlah_Following}
*Bio:* ${res.data.Biodata}
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC.jpg', str, m)
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