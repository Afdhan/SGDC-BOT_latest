let { MessageType } = require("@adiwajshing/baileys")
let { sticker } = require("../lib/sticker")
let kntl = require("../src/kntl.json")
let fetch = require("node-fetch")
let handler = async (m, { conn, args, text }) => {
if(args.length == 0) return m.reply("Masukkan Url Pack!")
if(!args[0].startsWith("https://")) return m.reply("Tau Url Ga Hu?")
await m.reply(global.wait)
let api = (kntl.lolkey2)
try{
        let res = await fetch(`https://api.lolhuman.xyz/api/telestick?apikey=${api}&url=${args[0]}`)
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
  
handler.command = /^stickertele$/i
module.exports = handler

//https://api.lolhuman.xyz/api/telestick?apikey=beta&url=https://t.me/addstickers/LINE_Menhera_chan_ENG
