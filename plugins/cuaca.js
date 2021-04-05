let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Nama Kota', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
axios.get(`https://api.xteam.xyz/cuaca?kota=${text}&APIKEY=KON`).then((res) => {
    let hasil = `
*Kota:* _${res.data.message.kota}_
*Hari:* _${res.data.message.hari}_
*Cuaca:* _${res.data.message.cuaca}_
*Deskripsi:* _${res.data.message.deskripsi}_
*Suhu:* _${res.data.message.suhu}_
*Pressure:* _${res.data.message.pressure}_
*Kelembaban:* _${res.data.message.kelembapan}_
*Angin:* _${res.data.message.angin}_


*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(cuaca)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


// MUHAMMAD AFDHAN
