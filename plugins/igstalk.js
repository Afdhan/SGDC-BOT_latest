let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
 if (!text) return conn.reply(m.chat, 'Masukkan Username Instagram', m)
  await m.reply('*[ WAIT ]* _Sedang Diproses.._')

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

*[ • SGDC-BOT • ]*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC-BOT.png', str, m)
        })
    })
  //} else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(igstalk)$/i
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