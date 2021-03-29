let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan link mediafire', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
axios.get(`https://videfikri.com/api/mediafire/?query=${text}`).then((res) => {
	let hasil = `
*FileName:* ${res.data.result.filename}
*Size:* ${res.data.result.size}
*Upload:* ${res.data.result.uploaded_on}
*Download:* ${res.data.result.download}

_Download sendiri, jangan manja:v_
*[ • SGDC-BOT • ]*
`.trim()
m.reply(hasil)	
/*let file = await conn.downloadM(res.data.result.download)
conn.sendFile(m.chat, file, `${res.data.result.filename}`, m)*/
   })
}
handler.command = /^(mediafire)$/i
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
