let { MessageType } = require("@adiwajshing/baileys")
let { sticker } = require("../lib/sticker")
let kntl = require("../src/kntl.json")
let fetch = require("node-fetch")
let handler = async (m, { conn, args, text }) => {
if(!text) return m.reply("Masukkan Teks!")
await m.reply(global.wait)
let api = (kntl.lolkey2)
try{
        let res = await fetch(`http://api.lolhuman.xyz/api/stickerwa?apikey=${api}&query=${text}`)
        let json = await res.json()
        let stic = json.result.sticker
         for (let i in stic) {
                 if(i >= 10) break;
                 let link = stic[i]
                 stiker = await sticker(null, link, global.packname, global.author)
                 conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
           }
      }catch(e){
      	m.reply(global.error)
      console.log(e)
      }
  }
  
handler.command = /^stickerwa$/i
module.exports = handler

//Muhammad Afdhan
