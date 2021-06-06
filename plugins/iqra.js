let axios = require("axios");
let fetch = require("node-fetch");
let handler = async(m, { conn, args }) => {
	await m.reply(global.wait)
	if(args.length == 0) return m.reply("Hmm....")
	if(isNaN(args[0])) return m.reply("Angka Aja Om :)")
	try {
		let url = "https://sgdc-bot.herokuapp.com/api/data/pdf/iqra" + args[0]
        let res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
        let resu = await res.text()
        conn.reply(m.chat, `
*IQRA ${args[0]} PDF*
*Link:* ${resu}
       
*SGDC-BOT*
`.trim(), m)
        
}catch(e){
	m.reply("```ERROR```")
	}
}
handler.command = /^(iqra)$/i

module.exports = handler