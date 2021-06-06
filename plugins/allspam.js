let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let tytyd = m.mentionedJid[0] ? m.mentionedJid[0] : text
    let txt = text
    if(tytyd == m.mentionedJid[0]) {
         txt = tytyd.split("@s.whatsapp.net")[0]
         }
    if(!txt) return m.reply('_Tag Atau Ketik Nomor Orang Yang Akan Dispam_')
  try {
    await m.reply(global.wait)
    let api = (kntl.xteam2)
	await axios.get(`https://api.xteam.xyz/spammer/allspam?no=${txt}&APIKEY=${api}`)
    await axios.get(`https://api.xteam.xyz/spammer/allspam?no=${txt}&APIKEY=${api}`)
    await axios.get(`https://api.xteam.xyz/spammer/allspam?no=${txt}&APIKEY=${api}`)
    await axios.get(`https://api.xteam.xyz/spammer/allspam?no=${txt}&APIKEY=${api}`)
    await axios.get(`https://api.xteam.xyz/spammer/allspam?no=${txt}&APIKEY=${api}`)
    .then((res) => conn.reply(m.chat, "```Berhasil Mengirim Spam Ke Nomor Tujuan```", m))
    }catch (e){
    	m.reply("```ERROR```")
    console.log (e)
   }
}
handler.command = /^allspam$/i
handler.premium = true
module.exports = handler

//  MUHAMMAD AFDHAN
