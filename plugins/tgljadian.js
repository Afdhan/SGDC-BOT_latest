let axios = require("axios");
let handler = async(m, { conn, text }) => {
let [tgl, bln, th] = text.split `|`
    if (!text) return conn.reply(m.chat, 'Masukkan tanggal, bulan, dan tahun. contoh *!maknajadian 17|08|1945*', m)
    if (!tgl) return conn.reply(m.chat, 'Tanggal tidak boleh kosong', m)
    if (!bln) return conn.reply(m.chat, 'Bulan tidak boleh kosong', m)
    if (!th) return conn.reply(m.chat, 'Tahun tidak boleh kosong', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
axios.get(`https://videfikri.com/api/primbon/tgljadian/?tgl=${tgl}&bln=${bln}&thn=${th}`).then((res) => {
    let hasil = `${res.data.result.hasil}`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(maknajadian)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler