let fs = require ('fs')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let handler  = async (m, { conn, args, usedPrefix: _p }) => {
    let name = conn.getName(m.sender)
  //  let versi = 1.5.1
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let img ='src/SGDC_BOT.jpg'
    let mn = `
*━━━━━━━━━━━━━━━━━━━━━*
_Hey *${name}* you will using *SGDC-BOT!*_
_before you using this features,_ 
_please follow the rules *SGDC-BOT.*_
_if you violate, your account will be banned permanently!_

*Rules:*
*> Don't Spam !!!*
*> Don't Calling !!!*
*> Don't Video Calls !!!*
*━━━━━━━━━━━━━━━━━━━━━*
*┏━━━━━━━━━━━━━━━━━━━┓*
*┃                      [ • SGDC-BOT • ]*
*┃╭═════════════════╮*
*┃║ Name :        ${name}*
*┃║ Date :          ${week}, ${date}*
*┃║ Time :         ${time}*
*┃║ Uptime :      ${uptime}*
*┃║ Version :     1.5.1*
*┃║ Prefix :       「 ${_p} 」*
*┃╰═════════════════╯*
*┃                 MENU ON SGDC-BOT*
*┃╭═════════════════╮*
*┃║ ${_p}exo*
*┃║ ${_p}bts*
*┃║ ${_p}cum*
*┃║ ${_p}feet*
*┃║ ${_p}loli*
*┃║ ${_p}tits*
*┃║ ${_p}neko*
*┃║ ${_p}husbu*
*┃║ ${_p}kanna*
*┃║ ${_p}cecan*
*┃║ ${_p}cogan*
*┃║ ${_p}meme*
*┃║ ${_p}hentai*
*┃║ ${_p}shota*
*┃║ ${_p}waifu*
*┃║ ${_p}sagiri*
*┃║ ${_p}shinobu*
*┃║ ${_p}darkjoke*
*┃║ ${_p}owner*
*┃║ ${_p}puitis*
*┃║ ${_p}iqtest*
*┃║ ${_p}ping*
*┃║ ${_p}bacotan*
*┃║ ${_p}donasi*
*┃║ ${_p}covid*
*┃║ ${_p}nickepep*
*┃║ ${_p}katabijak*
*┃║ ${_p}katabucin*
*┃║ ${_p}grouplist*
*┃║ ${_p}linkgroup*
*┃║ ${_p}tebakgambar*
*┃║ ${_p}ban*
*┃║ ${_p}unban*
*┃║ ${_p}reset*
*┃║ ${_p}restart*
*┃║ ${_p}deletechat*
*┃║ ${_p}mutechat*
*┃║ ${_p}afk* _Reason_
*┃║ ${_p}mediafire* _Url_
*┃║ ${_p}join* _Url_
*┃║ ${_p}fetch* _Url_
*┃║ ${_p}ssweb* _Url_
*┃║ ${_p}bitly* _Url_
*┃║ ${_p}cuttly* _Url_
*┃║ ${_p}tinyurl* _Url_
*┃║ ${_p}nsfw* _Query_
*┃║ ${_p}anime* _Query_
*┃║ ${_p}bc* _Text_
*┃║ ${_p}bcgc* _Text_
*┃║ ${_p}run* _Teks_
*┃║ ${_p}say* _Teks_
*┃║ ${_p}ttp* _Teks_
*┃║ ${_p}ttp2* _Teks_
*┃║ ${_p}ttp3* _Teks_
*┃║ ${_p}attp* _Teks_
*┃║ ${_p}attp2* _Teks_
*┃║ ${_p}style* _Teks_
*┃║ ${_p}tahta* _Teks_
*┃║ ${_p}tahta2* _Teks_
*┃║ ${_p}sgdc* _Teks_
*┃║ ${_p}nulis* _Teks_
*┃║ ${_p}nulis2* _Teks_
*┃║ ${_p}nulis3* _Teks_
*┃║ ${_p}nulis4* _Teks_
*┃║ ${_p}halah* _Teks_
*┃║ ${_p}hilih* _Teks_
*┃║ ${_p}huluh* _Teks_
*┃║ ${_p}heleh* _Teks_
*┃║ ${_p}holoh* _Teks_
*┃║ ${_p}simi* _Teks_
*┃║ ${_p}wiki* _Teks_
*┃║ ${_p}kbbi* _Teks_
*┃║ ${_p}bokeh* _Teks_
*┃║ ${_p}qrcode* _Teks_
*┃║ ${_p}komiku* _Teks_
*┃║ ${_p}hidetag* _Teks_
*┃║ ${_p}base64* _Teks_
*┃║ ${_p}decode64* _Teks_
*┃║ ${_p}report* _Teks_
*┃║ ${_p}google* _Teks_
*┃║ ${_p}gimage* _Teks_
*┃║ ${_p}jhuruf* _Teks_
*┃║ ${_p}repeat* _Teks_
*┃║ ${_p}brainly* _Teks_
*┃║ ${_p}teksbalik* _Teks_
*┃║ ${_p}otakudesu* _Teks_
*┃║ ${_p}randompict* _Teks_
*┃║ ${_p}dewabatch* _Teks_
*┃║ ${_p}kusonime* _Teks_
*┃║ ${_p}pastebin* _Teks_
*┃║ ${_p}pinterest* _Teks_
*┃║ ${_p}artimimpi* _Teks_
*┃║ ${_p}teksbalik* _Teks_
*┃║ ${_p}tts* _lang Text_
*┃║ ${_p}dropwater* _Teks_
*┃║ ${_p}futuristic* _Teks_
*┃║ ${_p}sand* _Teks_
*┃║ ${_p}neon* _Teks_
*┃║ ${_p}zuan* _Teks_
*┃║ ${_p}burn* _Teks_
*┃║ ${_p}wolf* _Teks_
*┃║ ${_p}candy* _Teks_
*┃║ ${_p}smoke* _Teks_
*┃║ ${_p}shine* _Teks_
*┃║ ${_p}night* _Teks_
*┃║ ${_p}metall* _Teks_
*┃║ ${_p}graffiti* _Teks_
*┃║ ${_p}candle* _Teks_
*┃║ ${_p}naruto* _Teks_
*┃║ ${_p}paper* _Teks_
*┃║ ${_p}dark* _Teks_
*┃║ ${_p}coffe* _Teks_
*┃║ ${_p}coffe2* _Teks_
*┃║ ${_p}coffe3* _Teks_
*┃║ ${_p}matrix* _Teks_
*┃║ ${_p}silverbutton* _Teks_
*┃║ ${_p}goldbutton* _Teks_
*┃║ ${_p}quotemaker* _Teks_
*┃║ ${_p}setbye* _Text_
*┃║ ${_p}setwelcome* _Text_
*┃║ ${_p}8bit* _Text|Text_
*┃║ ${_p}glitch* _Text|Text_
*┃║ ${_p}wanted* _Text|Text_
*┃║ ${_p}photooxy* _Effect|Text_
*┃║ ${_p}readmore* _Text|Text_
*┃║ ${_p}maknajadian* _Tgl|Bln|Thn_
*┃║ ${_p}fitnah* _Text @user Text_
*┃║ ${_p}igstalk* _Username_
*┃║ ${_p}githubstalk* _Username
*┃║ ${_p}twitterstalk* _Username_
*┃║ ${_p}spamsms* _08xxx|Jmlh_
*┃║ ${_p}spamcall* _8xxxx_
*┃║ ${_p}add* _628xxxx_
*┃║ ${_p}promote* _@user_
*┃║ ${_p}demote* _@user_
*┃║ ${_p}kick* _@user_
*┃║ ${_p}opromote* _@user_
*┃║ ${_p}odemote* _@user_
*┃║ ${_p}ohidetag* _@user_
*┃║ ${_p}okick* _@user_
*┃║ ${_p}bann* _@user_
*┃║ ${_p}unbann* _@user_
*┃║ ${_p}addprem* _@user_
*┃║ ${_p}delprem* _@user_
*┃║ ${_p}getpp* _@user_
*┃║ ${_p}spam* _@user|Teks_
*┃║ ${_p}santet* _@user|Teks_
*┃║ ${_p}jadwalsholat* _Daerah_
*┃║ ${_p}cuaca* _Daerah_
*┃║ ${_p}waktu* _Daerah_
*┃║ ${_p}ninja* _Nama_
*┃║ ${_p}artinama* _Nama_
*┃║ ${_p}calc* _Angka_
*┃║ ${_p}lirik* _Judul Lagu_
*┃║ ${_p}chord* _Judul Lagu_
*┃║ ${_p}nonton* _Judul Film_
*┃║ ${_p}enable* _Option_
*┃║ ${_p}disable* _Option_
*┃║ ${_p}snobg* _Image/Reply_
*┃║ ${_p}sgif2* _Image/Reply_
*┃║ ${_p}sticgif* _Image/Reply_ (error)
*┃║ ${_p}sticker* _Image/Reply_
*┃║ ${_p}toimg* _Reply Sticker_
*┃╰═════════════════╯*
*┃                    [ • SGDC-BOT • ]*
*┗━━━━━━━━━━━━━━━━━━━┛*

Powered by *SGDC-BOT@^1.5.1*
`.trim()
 await conn.sendFile(m.chat, img, 'SGDC-BOT.jpg', mn, m)
  m.reply('Untuk Menu Gretongan, Ketik *!gretongmenu*')
}

handler.command = /^(menu|help|start|bot|helep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

// Muhammad afdhan
