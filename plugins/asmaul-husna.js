let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/asmaulhusna`)
            let ass = await res.json()
            let data = ass.result.data
            let out = `*「  • ASMA'UL HUSNA •  」*\n`
                for (let x of data) {
                    out += `─────────────────\n`
                    out += `*• Nomor:* ${x.index}\n`
                    out += `*• Latin:* ${x.latin}\n`
                    out += `*• Arab:* ${x.arabic}\n`
                    out += `*• Arti:* ${x.translation_id}\n`
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
