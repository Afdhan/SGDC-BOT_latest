let axios = require("axios");
let handler = async(m, { conn, text }) => {
   try {
            await m.reply(global.wait)
            axios.get(`https://api-anoncybfakeplayer.herokuapp.com/free-proxy/all`).then ((res) => {
            let pro = res.data
            let xx = `*「  PROXY SCRAPPER  」*\n\n`
            for (let i = 0; i < pro.result.length; i++) {
             	xx += `─────────────────────\n*HTTPS:* ${pro.result[i].https}\n*IP Proxy:* ${pro.result[i].ip}\n*Location:* ${pro.result[i].lokasi}\n`
             }
                 xx += '\nSumber: https://free-proxy.net\n\n*SGDC-BOT*'
                  conn.reply(m.chat, xx, m)
	})
    } catch (e) {
  	m.reply('```Error```')
  }
}
handler.command = /^(proxy(scrapp|scrapper)?|proxyscrapper)$/i
module.exports = handler

//  MUHAMMAD AFDHAN
