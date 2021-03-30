let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan IP adress', m)

  await m.reply('*[ WAIT ]* _Searching..._')
	axios.get(`https://api.vhtear.com/ipwhois?ipaddr=${text}&apikey=NOT-PREMIUM`).then ((res) => {
	 	let hasil = `
*IP Adress:* ${res.data.result.ip_adress}
*City:* ${res.data.result.city}
*Region:* ${res.data.result.region}
*Country:* ${res.data.result.country}
*Postal:* ${res.data.result.postal_code}
*Time Zone:* ${res.data.result.time_zone}
*ASN:* ${res.data.result.asn}
*ORG:* ${res.data.result.org}

*[ • SGDC-BOT • ]*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(whois)$/i
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
