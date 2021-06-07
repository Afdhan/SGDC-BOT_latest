let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
try {
    await m.reply(global.wait)
	let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/ayatkursi`)
	let data = await res.json()
	let hasil = `
*AYAT KURSI*
	
*Arab:* 
${data.result.data.arabic}
*Latin:* 
${data.result.data.latin}
*Translation:*
${data.result.data.translation}

*Tafsir:*
${data.result.data.tafsir}

*SGDC-BOT*
`.trim()

    conn.reply(m.chat, hasil, m)
    } catch (e) {
  	m.reply('```Error```')
  }
}

handler.command = /^(ayatkursi)$/i


module.exports = handler

//  MUHAMMAD AFDHAN
