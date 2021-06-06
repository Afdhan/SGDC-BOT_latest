let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
	if(!text) return m.reply("Masukkan Nama Daerah")
	let api = (kntl.lolkey2)
    try{
        let res = await fetch(`http://api.lolhuman.xyz/api/kodepos?apikey=${api}&query=${text}`)
        let big = await res.json()
        let hihi = big.result[0]
        let txt = `
Provinsi: ${hihi.province}
Kabupaten: ${hihi.city}
Kecamatan: ${hihi.subdistrict}
Kelurahan: ${hihi.urban}
Kode Pos: ${hihi.postalcode}

*SGDC-BOT*
`.trim()
      conn.reply(m.chat, txt, m)
  } catch (e) {
   m.reply('```ERROR```')
  }
}
handler.command = /^(kodepos)$/i
module.exports = handler
