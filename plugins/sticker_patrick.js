let axios = require("axios");
let { MessageType } = require("@adiwajshing/baileys");
let { sticker } = require("../lib/sticker");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	await m.reply(global.wait)
	let api = (kntl.lolkey2)
try {
     let link = 'https://api.lolhuman.xyz/api/sticker/patrick?apikey=' + api;
     let stiker = await sticker(null, link, global.packname, global.author)
     conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
  } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(s(tic?ker)?patric?k)$/i


//  MUHAMMAD AFDHAN
module.exports = handler
