let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Judul Filmnya', m)

	axios.get(`https://tobz-api.herokuapp.com/api/film?q=${text}&apikey=BotWeA`).then ((res) => {
	/* 	let hasil = `
*[ NONTON FILM ]*

Judul : ${res.data.result.judul}
Genre : ${res.data.result.genre_negara}
Rating : ${res.data.result.rating}
Link : ${res.data.result.link}
`.trim()
    conn.reply(m.chat, hasil, m)*/
m.reply('NOT FOUND')
	})
}

handler.command = /^(nonton)$/i
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