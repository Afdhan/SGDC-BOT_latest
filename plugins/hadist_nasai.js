let fetch = require("node-fetch");
let handler = async(m, { conn, text }) => {
	await m.reply(global.wait)
    let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/hadith/nasai`)
    let data = await res.json()
    let teks = "*HADIST RIWAYAT NASAI*\n\n"
    for (let hr of data) {
    teks += `Nomor: *${hr.nomor}\n`
    teks += `Arab: \n${hr.arab}\n`
    teks += `Latin: \n${hr.id}\n`
    teks += `──────────────────\n`
     }
     teks += "\n*SGDC-BOT"
     conn.reply(m.chat, teks, m)
}

handler.command = /^((hadis(t)?|hr)?nasai)$/i

//  MUHAMMAD AFDHAN

module.exports = handler