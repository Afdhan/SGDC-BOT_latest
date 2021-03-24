let axios = require("axios");
let handler = async(m, { conn, text }) => {
    let [no, jo] = text.split `|`

    if (!no) return conn.reply(m.chat, 'Masukkan Nomor Tujuan!', m)
    if (!jo) return conn.reply(m.chat, 'Masukkan Jumlah Pesan', m)

await m.reply('*[ WAIT ]* _Sedang Di Proses_')
axios.get(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${no}&jum=${jo}`).then((res) => {
    let hasil = `${res.data.logs}`
conn.reply(m.chat, hasil, m)
	})
}


handler.command = /^(spamsms)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
