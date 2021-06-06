let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/doaharian`)
            let json = await res.json()
                let out = `*「  DO'A HARIAN  」*\n\n`
                for (let x of json) {
                    out += `─────────────────────\n*${x.title}:*\n${x.arabic}\n*Latin:*\n${x.latin}\n*Artinya*\n${x.translation}\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(doaharian)$/i


module.exports = handler

//  MUHAMMAD AFDHAN
