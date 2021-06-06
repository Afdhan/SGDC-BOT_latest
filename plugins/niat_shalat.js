let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let api = (kntl.tbotkey)
   try{   
   	     await m.reply(global.wait)
            let res = await fetch(`https://sgdc-bot.herokuapp.com/api/data/json/niatshalat`)
            let json = await res.json()
                let meme = `*「  NIAT SHOLAT  」*\n\n`
                for (let x of json) {
                    meme += `───────────────────\n\n*${x.name}*\n*~ Arab:*\n${x.arabic}\n*~ Latin:*\n${x.latin}\n`
                }
                    meme += '\n\n*SGDC-BOT*'
                 conn.reply(m.chat, meme, m)
  } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(niatshalat|niatsholat|niatsolat)$/i
module.exports = handler

//  MUHAMMAD AFDHAN
