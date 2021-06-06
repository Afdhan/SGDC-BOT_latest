let axios = require("axios");
let handler = async(m, { conn, text }) => {
   if (!text) return conn.reply(m.chat, 'Apa yang mau dicari?', m)
 try {
    await m.reply(global.wait)
    axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${text}`).then((res) => {
    let hasil = `
*WIKIPEDIA SEARCH*
*Query:* _${text}
*Hasil:*
${res.data.result}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
	})
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(wiki|wikisearch)$/i

module.exports = handler
