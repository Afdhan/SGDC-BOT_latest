let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
    let api = (kntl.lolkey2)
try {
    if (!text) return conn.reply(m.chat, '_Silahkan Masukan Teks!_', m)
    //if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
    await m.reply(global.wait)
    let link = await fetch('https://api.lolhuman.xyz/api/pinterest?apikey=' + api + '&query=' + encodeURIComponent(text))
    let json = await link.json()
    //let poto = await axios.get(link)
    conn.sendFile(m.chat, json.result, 'SGDC-BOT.png', '*SGDC-BOT*', m)
  } catch (e) {
   m.reply('```Error```')
     console.log (e)
  }
} 

handler.command = /^(pinterest)$/i

module.exports = handler
