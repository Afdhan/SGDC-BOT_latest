let fetch = require('node-fetch')
let axios = require("axios");
let handler = async(m, { conn, args, usedPrefix }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan *${usedPrefix}anime*\nSilahkan ketik: *${usedPrefix}anime* [Query]\nContoh: *${usedPrefix}nsfw random*\n\n*List Query:*\n_> blowjob_\n_> trap_\n_> neko_\n_> loli_\n_> waifu_`, m)
    if (args[0] == 'random' || args[0] == 'blowjob' || args[0] == 'trap' || args[0] == 'loli' || args[0] == 'waifu' || args[0] == 'neko') {
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')

      let nsfw = 'http://lolhuman.herokuapp.com/api/random/nsfw/' + args[0] + '?apikey=761e676c13e7710a48011b2b'

                conn.sendFile(m.chat, nsfw, 'SGDC-NSFW.jpg', 'Jangan Colay:v', m)
      }
  } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}      
handler.command = /^(nsfw)$/i


handler.fail = null

//  MUHAMMAD AFDHAN
module.exports = handler
