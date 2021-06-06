let fetch = require("node-fetch");
let handler = async(m, { conn, text }) => {
	await m.reply(global.wait)
    let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/hadith/ibnu-majah`)
    let data = await res.json()
    let teks = "*HADIST RIWAYAT IBNU MAJAH*\n\n"
    for (let hr of data) {
    teks += `Nomor: *${hr.nomor}\n`
    teks += `Arab: \n${hr.arab}\n`
    teks += `Latin: \n${hr.id}\n`
    teks += `──────────────────\n`
     }
     teks += "\n*SGDC-BOT"
     conn.reply(m.chat, teks, m)
}

handler.command = /^((hadis(t)?|hr)?ibnumajah)$/i

//  MUHAMMAD AFDHAN

module.exports = handler
