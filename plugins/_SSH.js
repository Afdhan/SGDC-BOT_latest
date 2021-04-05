let axios = require("axios");
let handler = async(m, { conn, text }) => {

await m.reply('*[ WAIT ]* _Sedang Diproses..._')
	axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=https://sfile.mobi/bN5fUTnIl27`).then ((res) => {
		
		   conn.sendFile(m.chat, res.data.result, `${res.data.title}`, m)
	})
}

handler.command = /^(apkssh)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
