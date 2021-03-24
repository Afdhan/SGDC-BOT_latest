let axios = require("axios");
let handler = async(m, { conn, text }) => {

axios.get(`https://covid19.mathdro.id/api/countries/id`)
    let hasil = `*Positif: ${confirmed.value}*\n*Sembuh: ${recovered.value}*\n*Meninggal: ${deaths.value}*\n*Update: ${lastUpdate}*`
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