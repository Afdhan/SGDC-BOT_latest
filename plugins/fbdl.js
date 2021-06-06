let fetch = require("node-fetch")
let kntl = require("../src/kntl.json")
let handler = async(m, { conn, text, isPrems }) => {
	if (!text) return m.reply("Masukkan Url Video Facebook")
	let api = (kntl.lolkey2)
    try {
          let res = await fetch(`http://api.lolhuman.xyz/api/facebook?apikey=${api}&url=${text}`)
          let json = await res.json()
          let tytyd = json.result[0].link
          conn.reply(m.chat, `Download: ${tytyd}`, m)
          if(isPrems) conn.sendFile(m.chat, tytyd, "SGDC_BOT.mp4", "*SGDC-BOT*", m)
}catch(e){
     m.reply("```ERROR```")
     console.log (e)
    }
}

handler.command = /^(fb(video)?dl)$/i

//  MUHAMMAD AFDHAN

module.exports = handler