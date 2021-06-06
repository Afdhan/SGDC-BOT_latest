let fetch = require("node-fetch");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, args, text }) => {
    if (args.length == 0) return conn.reply(m.chat, '_Silahkan Masukan Link_', m)
   // if (!args.startsWith("https://")) return m.reply("Masukkan Link Yang Benar Lah :|")
   // let teks = args.startsWith("https://")
 try{
    await m.reply(global.wait)
    let res = await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)
    let resu = await res.text()
    let hasil = `
*Link:* ${args[0]}
*Short:* ${resu}

*SGDC-BOT*
`.trim()
conn.reply(m.chat, hasil, m)
   } catch (e) {
   m.reply('```Error```')
  }
}
handler.command = /^(tiny(url)?)$/i

module.exports = handler
