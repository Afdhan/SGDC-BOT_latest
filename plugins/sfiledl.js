let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Link!', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
	axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=${text}`).then ((res) => 
//let ayam = res.data.result
//let goyeng = `${res.data.title}`
//conn.sendFile(m.chat, res.data.result, goyeng, 'ini', m)
let hasil = `
*KLIK LINK UNTUK DOWNLOAD*

*Title:* ${res.data.title}
*Size:* ${res.data.size}
*Link:* ${res.data.result}

_Download Sendiri, Jangan Manja :v_

*[ • SGDC-BOT • ]*
`.trim()

 conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(sfiledl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
