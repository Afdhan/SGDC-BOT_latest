let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
    let api = (kntl.zekskey)
 try {
  await m.reply(global.wait)
  axios.get(`https://api.zeks.xyz/api/memeindo?apikey=${api}`).then((res) => {
 let link = res.data.result
conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
  })
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(meme(indo)?)$/i

module.exports = handler
//    MUHAMMAD AFDHAN