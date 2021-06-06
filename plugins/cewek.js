let kntl = require("../src/kntl.json");
let axios = require("axios");
let handler = async(m, { conn, text }) => {
	await m.reply(global.wait)
	let api = (kntl.xteam)
 try {
    //await m.reply(global.wait)
    let url = "https://api.xteam.xyz/randomimage/cewe?APIKEY=" + api
    conn.sendFile(m.chat, url, "SGDC_BOT.png", "*SGDC-BOT*", m)
   } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(cewek|cecan|ciwi|ciwey)$/i
module.exports = handler
