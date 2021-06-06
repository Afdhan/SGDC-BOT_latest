let axios = require("axios")
let fetch = require("node-fetch")
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
    let api = (kntl.tobzkey)
    if (!text) return m.reply("Masukan Nama Daerahnya")
  try{
	let res = await axios.get(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${text}&apikey=${api}`)
        let data = res.data.result
	let hasil = `*JAM DUNIA*\n\n`
            hasil += `Daerah: _${text}_\n`
        for (let x of data) {
            hasil += `Info: _${x.title}_\n`
            hasil += `Tanggal: _${x.date}_\n`
            hasil += `Jam: _${x.time}_\n`
	    hasil += `Sun: _${x.sun}_\n\n`
     }
	    hasil += "*SGDC-BOT*"
     conn.reply(m.chat, hasil, m)
	}catch (e){
         m.reply("```ERROR```")
      }
}

handler.command = /^((zona)?waktu|jam(dunia)?)$/i
module.exports = handler
