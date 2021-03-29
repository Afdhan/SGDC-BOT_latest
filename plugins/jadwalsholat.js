let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama daerah', m)

 await m.reply('*[ WAIT ]* _Sedang diproses..._')
axios.get(`http://lolhuman.herokuapp.com/api/sholat/${text}?apikey=761e676c13e7710a48011b2b`).then((res) => {
    let hasil = `
*JADWAL SHOLAT*

*Wilayah:* ${res.data.result.wilayah}
*Tanggal:* ${res.data.result.tanggal}
*Sahur:* ${res.data.result.sahur}
*Imsak:* ${res.data.result.imsak}
*Shubuh:* ${res.data.result.subuh}
*Terbit:* ${res.data.result.terbit}
*Dhuha:* ${res.data.result.dhuha}
*Dzuhur:* ${res.data.result.dzuhur}
*Ashar:* ${res.data.result.ashar}
*Maghrib:* ${res.data.result.maghrib}
*Isya:* ${res.data.result.isya}

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(jadwal(sholat)?(shalat)?(solat)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
