let { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios")
let { sticker } = require("../lib/sticker")
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
	let api = (kntl.zekskey2)
	if (!text) return m.reply("Masukkan Teks!")
	if (text.length > 10) return m.reply("Teks Terlalu Panjang!")
	await m.reply(global.wait)
try {
    let link = "https://api.zeks.xyz/api/barcode?apikey=" + api + "&text=" + encodeURIComponent(text)
    conn.sendFile(m.chat, link, "SGDC_BOT.png", "*SGDC-BOT*", m)
    let stiker = await sticker(null, link, global.packname, global.author)
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
    }catch(e){
	m.reply("```ERROR```")
   }
}
handler.command = /^barcode$/i

module.exports = handler