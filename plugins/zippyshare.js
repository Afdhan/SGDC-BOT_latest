let fetch = require("node-fetch");
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text }) => {
	let api = (kntl.lolkey2)
    if (!text) return m.reply("Masukkan Url ZippyShare")
  try {
    let res = await fetch(`http://api.lolhuman.xyz/api/zippyshare?apikey=${api}&url=${text}`)
    let pess = await res.json()
    let tytyd = `
File Name: ${pess.name_file}
Size: ${pess.size}
Date Upload: ${pess.date_upload}
Download Url: ${pess.download_url}

*SGDC-BOT*
`.trim()
         conn.reply(m.chat, tytyd, m)
     }catch (e){
        m.reply("```ERROR```")
     console.log (e)
       }
}               

handler.command = /^(zippy(share)?)$/i
module.exports = handler

