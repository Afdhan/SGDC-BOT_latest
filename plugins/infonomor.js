let fetch = require("node-fetch")
let handler = async(m, { conn, text }) => {
	let user = m.mentionedJid ? m.mentionedJid[0] : text
	if(user == m.mentionedJid) use = user.split("@")[0].replace(/^62/, "0")
	else use = text
    if (!use) return m.reply("Masukkan Nomor")
  try {
	let res = await fetch(`https://docs-jojo.herokuapp.com/api/infonomor?no=${use}`)
	let data = await res.json()
	let hasil = `
Nomor: ${data.nomor}
Internasional: ${data.international}
Operator: ${data.op}

*SGDC-BOT*
`.trim()
        conn.reply(m.chat, hasil, m)
    }catch (e){
    	m.reply("```ERROR```")
    }
 }
 
handler.command = /^infonomor$/i
module.exports = handler