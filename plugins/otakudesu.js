let axios = require("axios");
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '_Silahkan masukan kata kunci_', m)
try {
  await m.reply(global.wait)
axios.get(`https://mhankbarbar.herokuapp.com/api/otakudesu?q=${text}`).then((res) => {
    let hasil = `
*${res.data.sinopsis}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
} 
handler.command = /^(otakudesu)$/i
module.exports = handler
