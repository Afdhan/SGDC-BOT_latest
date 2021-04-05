let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan *${usedPrefix}anime*\nSilahkan ketik: *${usedPrefix}anime* [Query]\nContoh: *${usedPrefix}anime random*\n\n*List Query:*\n_> waifu_\n_> husbu_\n_> neko_`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', 'SGDC-BOT', m)
            })
            .catch(() => {
                conn.reply(m.chat, '*[ ERROR ]* _Terjadi Kesalahan!_', m)
            })
    } else {
        conn.reply(m.chat, `Query tidak tersedia!. Silahkan ketik *${usedPrefix}anime* untuk melihat *List Query*`, m)
    }
//   } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}


handler.command = /^(anime)$/i

handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler