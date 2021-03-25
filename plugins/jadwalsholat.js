let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama daerah', m)

//  await m.reply('*[ WAIT ]* _Seda..._')
axios.get(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${text}`).then((res) => {
    let hasil = `
*Shubuh:* ${res.data.data.object.Shubuh}
*Dzuhur:* ${res.data.data.object.Dzuhur}
*Ashar:* ${res.data.data.object.Ashr}
*Maghrib:* ${res.data.data.object.Maghrib}
*Isya:* ${res.data.data.object.Isya}

*Source:* ${res.data.source}
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
//https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=bengkulu
