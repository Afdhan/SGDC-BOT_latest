const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const kntl = require("../src/kntl.json");
let handler  = async (m, { conn, text }) => {
	try {
	  await m.reply(global.wait)
	let api = (kntl.lolkey)
    if (text) {
    let res = await fetch('http://lolhuman.herokuapp.com/api/ttp3?apikey=' + api + '&text=' + encodeURIComponent(text))
    let img = await res.buffer()
    if (!img) throw img
    let stiker = await sticker(img, false, global.packname, global.author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
  } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(ttp3)$/i

//  MUHAMMAD AFDHAN

module.exports = handler