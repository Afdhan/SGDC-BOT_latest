let axios = require("axios");
let handler = async(m, { conn, text }) => {

let cvd = axios.get(`https://covid19.mathdro.id/api/countries/id`)
    let hasil = `*Positif: ${cvd.confirmed.value}*\n*Sembuh: ${cvd.recovered.value}*\n*Meninggal: ${cvd.deaths.value}*\n*Update: ${cvd.lastUpdate}*`
conn.reply(m.chat, hasil, m)
}

handler.command = /^infocovid$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
