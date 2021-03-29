let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
 if (!text) return conn.reply(m.chat, 'Masukkan Username Twitter', m)
  await m.reply('*[ WAIT ]* _Searching..._')

    axios.get(`https://videfikri.com/api/stalktwit/?username=${text}`)
    .then((res) => {
      imageToBase64(res.data.result.profile)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let str = `
*Nama:* ${res.data.result.full_name}
*Username:* ${res.data.result.username}
*Followers:* ${res.data.result.followers}
*Following:* ${res.data.result.following}
*Tweets:* ${res.data.result.tweets}

*[ • SGDC-BOT • ]*
`.trim()
     conn.sendFile(m.chat, buf, 'SGDC.png', str, m)
        })
    })
  } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(twitter(stalk)?)$/i
handler.owner = false

handler.private = false
//  MUHAMMAD AFDHAN
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler