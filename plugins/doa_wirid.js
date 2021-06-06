let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	let api = (kntl.tbotkey)
    try{
            await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/wirid`)
            let json = await res.json()
                let out = `*「  DO'A WIRID  」*\n\n`
                for (let x of json) {
                    out += `─────────────────────\n${x.arabic}\n*Keterangan:*\n_${x.tnc}_\n`
                }
                    out += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, out, m)
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(doawirid)$/i

module.exports = handler

//  MUHAMMAD AFDHAN
