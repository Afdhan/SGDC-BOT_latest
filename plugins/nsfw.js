let kntl = require("../src/kntl.json")
let handler = async(m, { conn, command }) => {
    let chat = global.DATABASE._data.chats[m.chat]
    if (!chat.nsfw) return m.reply('```Perlu Mengaktifkan Mode NSFW```')
    await m.reply(global.wait)
    let api = (kntl.lolkey2)
  try{
    let link = `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${api}`
    conn.sendFile(m.chat, link, "SGDC_BOT.png", "*SGDC-BOT*", m)
  }catch(e){
  	m.reply("```ERROR```")
  console.log(e)
  }
}

handler.command = [
'chiisaihentai',
'trap',
'blowjob',
'yaoi',
'ecchi',
'hentai',
'ahegao',
'hololewd',
'sideoppai',
'animefeets',
'animebooty',
'animethighss',
'hentaiparadise',
'animearmpits',
'hentaifemdom',
'lewdanimegirls',
'biganimetiddies',
'animebellybutton',
'hentai4everyone',
]

module.exports = handler
