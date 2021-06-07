let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/doaharian`)
            let json = await res.json()
            let data = json.result.data
                let out = `*「  DO'A HARIAN  」*\n`
                for (let x of data) {
                    out += `──────────────────\n`
                    out += `*${x.title}:*\n`
                    out += `${x.arabic}\n`
                    out += `*Latin:*\n${x.latin}\n`
                    out += `*Artinya*\n${x.translation}\n`
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
