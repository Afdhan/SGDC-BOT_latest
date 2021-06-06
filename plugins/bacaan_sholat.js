let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
	try {
            await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/bacaanshalat`)
            let json = await res.json()
                let out = `*「  BACAAN SHALAT  」*\n\n`
                for (let x of json) {
                    out += '─────────────────────\n'
                    out += `*○ ${x.name}*\n`
                    out += `*Arab:*\n${x.arabic}\n`
                    out += `*Latin:*\n${x.latin}\n\n`
                    out += `*Artinya:*\n${x.terjemahan}\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
	
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(doashalat|doasalat|doasolat|bacaanshalat|bacaansholat|bacaansolat)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
