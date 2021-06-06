let  kntl = require("../src/kntl.json");
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	await m.reply(global.wait)
	let api = (kntl.xteam2)
 try {
    await m.reply(global.wait)
    let url = await axios.get("https://api.xteam.xyz/randomimage/cowo?APIKEY=" + api);
    conn.sendFile(m.chat, url.data, "SGDC_BOT.png", "*SGDC-BOT*", m)
   } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(cogan|cowok)$/i

module.exports = handler
// MUHAMMAD AFDHAN