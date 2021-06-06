let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
	await m.reply(global.wait)
    try{
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/asmaulhusna`)
            let data = await res.json()
            let out = `*「  • ASMA'UL HUSNA •  」*\n\n`
                for (let x of data) {
                    out += `\n─────────────────────\n\n*• Nomor:* ${x.index}\n*• Latin:* ${x.latin}\n*• Arab:* ${x.arabic}\n*• Arti:* ${x.translation_id}\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(asmaulhusna)$/i
module.exports = handler

//  MUHAMMAD AFDHAN
