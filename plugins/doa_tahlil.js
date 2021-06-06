let fetch = require("node-fetch");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/tahlil`)
            let json = await res.json()
                let out = `*「  DO'A TAHLIL  」*\n\n`
                for (let x of json) {
                    out += `─────────────────────\n*${x.title}*\n${x.arabic}\n\n*Artinya*\n${x.translation}\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(doatahlil(an)?)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
