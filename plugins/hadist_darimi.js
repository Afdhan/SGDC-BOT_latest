let fetch = require("node-fetch");
let handler = async(m, { conn, text }) => {
	await m.reply(global.wait)
    let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/hadith/darimi`)
    let json = await res.json()
    let teks = "*HADIST RIWAYAT DARIMI*\n\n"
    for (let { number, arab, id } of json) {
    teks += `Nomor: *${number}\n`
    teks += `Arab: \n${arab}\n`
    teks += `Latin: \n${id}\n`
    teks += `──────────────────\n`
     }
     teks += "\n*SGDC-BOT"
     conn.reply(m.chat, teks, m)
}

handler.command = /^((hadis(t)?|hr)?darimi)$/i

//  MUHAMMAD AFDHAN

module.exports = handler
