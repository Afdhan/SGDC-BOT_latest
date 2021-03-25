let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, args, usedPrefix: _p }) => {
  let name = conn.getName(m.sender)
  let img ='src/SGDC_BOT.jpg'
  let mn = `
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ YourName :  ${name}*
*┃║ BotName :    SGDC - BOT*
*┃║ Version :       1.4.2 (beta)*
*┃║ Prefix :           ( ${_p} )*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ LIST MENU ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ ${_p}ban*
*┃║ ${_p}unban*
*┃║ ${_p}reset*
*┃║ ${_p}restart*
*┃║ ${_p}deletechat*
*┃║ ${_p}mutechat*
*┃║ ${_p}linkgroup*
*┃║ ${_p}listonline*
*┃║ ${_p}iqtest*
*┃║ ${_p}ping*
*┃║ ${_p}katabijak*
*┃║ ${_p}katabucin*
*┃║ ${_p}puitis*
*┃║ ${_p}tebakgambar*
*┃║ ${_p}cecan*
*┃║ ${_p}owner*
*┃║ ${_p}bacotan*  
*┃║ ${_p}donasi*
*┃║ ${_p}grouplist*
*┃║ ${_p}qr*  [Text]
*┃║ ${_p}ttp*  [Text]
*┃║ ${_p}attp*  [Text]
*┃║ ${_p}style*  [Text]
*┃║ ${_p}tahta*  [Text]
*┃║ ${_p}tahta2*  [Text]
*┃║ ${_p}sgdc*  [Text]
*┃║ ${_p}nulis*  [Text]
*┃║ ${_p}nulis2*  [Text]
*┃║ ${_p}nulis3*  [Text]
*┃║ ${_p}komiku*  [Text]
*┃║ ${_p}teksbalik*  [Text]
*┃║ ${_p}hidetag*  [Text]
*┃║ ${_p}simi*  [Text]
*┃║ ${_p}artimimpi*  [Text]
*┃║ ${_p}halah*  [Text]
*┃║ ${_p}hilih*  [Text]
*┃║ ${_p}huluh*  [Text]
*┃║ ${_p}heleh*  [Text]
*┃║ ${_p}holoh*  [Text]
*┃║ ${_p}setwelcome*  [Text]
*┃║ ${_p}setbye*  [Text]
*┃║ ${_p}report*  [Text]
*┃║ ${_p}base64*  [Text]
*┃║ ${_p}run*  [Text]
*┃║ ${_p}kbbi*  [Text]
*┃║ ${_p}pastebin*  [Text]
*┃║ ${_p}randompict*  [Text]
*┃║ ${_p}otakudesu*  [Text]
*┃║ ${_p}dewabatch*  [Text]
*┃║ ${_p}kusonime*  [Text]
*┃║ ${_p}bokeh*  [Text]
*┃║ ${_p}say*  [Text]
*┃║ ${_p}repeat*  [Text]
*┃║ ${_p}bc*  [Text]
*┃║ ${_p}bcgc*  [Text]
*┃║ ${_p}dropwater*  [Text]
*┃║ ${_p}futuristic*  [Text]
*┃║ ${_p}sand*  [Text]
*┃║ ${_p}neon*  [Text]
*┃║ ${_p}zuan*  [Text]
*┃║ ${_p}burn*  [Text]
*┃║ ${_p}wolf*  [Text]
*┃║ ${_p}candy*  [Text]
*┃║ ${_p}smoke*  [Text]
*┃║ ${_p}shine*  [Text]
*┃║ ${_p}night*  [Text]
*┃║ ${_p}metall*  [Text]
*┃║ ${_p}graffiti*  [Text]
*┃║ ${_p}silverbutton*  [Text]
*┃║ ${_p}goldbutton*  [Text]
*┃║ ${_p}candle*  [Text]
*┃║ ${_p}naruto*  [Text]
*┃║ ${_p}paper*  [Text]
*┃║ ${_p}dark*  [Text]
*┃║ ${_p}coffe*   [Text]
*┃║ ${_p}coffe2*   [Text]
*┃║ ${_p}coffe3*  [Text]
*┃║ ${_p}matrix*  [Text]
*┃║ ${_p}quotemaker*  [Text]
*┃║ ${_p}teksbalik*   [Text]
*┃║ ${_p}jhuruf*  [Text]
*┃║ ${_p}setbye*  [Text]
*┃║ ${_p}setwelcome*  [Text]
*┃║ ${_p}tts* [lang] [Text]
*┃║ ${_p}brainly*  [Soal]
*┃║ ${_p}fetch*  [Url]
*┃║ ${_p}ssweb*  [Url]
*┃║ ${_p}bitly*  [Url]
*┃║ ${_p}cuttly*  [Url]
*┃║ ${_p}tinyurl*  [Url]
*┃║ ${_p}mediafire*  [Url]
*┃║ ${_p}afk*  [Reason]
*┃║ ${_p}join*  [LinkGC]
*┃║ ${_p}pinterest*  [Search]
*┃║ ${_p}google*  [Search]
*┃║ ${_p}chord* [Judul]
*┃║ ${_p}nonton* [Judul]
*┃║ ${_p}sticgif*  [Reply]
*┃║ ${_p}sticwm*  [Reply]
*┃║ ${_p}sticker*  [Reply]
*┃║ ${_p}stimg*  [Reply]
*┃║ ${_p}toimg*  [Reply]
*┃║ ${_p}ninja* [Nama]
*┃║ ${_p}artinama*  [Nama]
*┃║ ${_p}on*  [Optiokn]
*┃║ ${_p}off*  [Option]
*┃║ ${_p}enable*  [Option]
*┃║ ${_p}disable*  [Option]
*┃║ ${_p}setpp*  [Image]
*┃║ ${_p}anime* [Query]
*┃║ ${_p}wiki*  [Query]
*┃║ ${_p}igstalk*  [Username]
*┃║ ${_p}waktu*  [Daerah]
*┃║ ${_p}calc*  [Angka]
*┃║ ${_p}kalkulator*  [Angka]
*┃║ ${_p}8bit*  [Text] | [Text]
*┃║ ${_p}glitch*  [Text] | [Text]
*┃║ ${_p}wanted*  [Text] | [Text]
*┃║ ${_p}readmore*  [Text] | [Text]
*┃║ ${_p}hidetext*  [Text] | [Text]
*┃║ ${_p}maknajadian*  [Tgl] | [Bln] | [Thn]
*┃║ ${_p}nuduh*  [Text] [@user] [Text]
*┃║ ${_p}fitnah*  [Text] [@user] [Text]
*┃║ ${_p}add*  [628xx,628xx]
*┃║ ${_p}oadd*  [628xxx]
*┃║ ${_p}spamsms*  [No] | [Jmlh]
*┃║ ${_p}spamcall*  [8xxx]
*┃║ ${_p}profil*  [@user]
*┃║ ${_p}bann* [@user]
*┃║ ${_p}unbann* [@user]
*┃║ ${_p}addprem* [@user]
*┃║ ${_p}delprem* [@user]
*┃║ ${_p}okick*  [@user]
*┃║ ${_p}opromote*  [@user]
*┃║ ${_p}odemote*  [@user]
*┃║ ${_p}ohidetag*  [@user]
*┃║ ${_p}demote*  [@user]
*┃║ ${_p}promote*  [@user]
*┃║ ${_p}kick*  [@user]
*┃╰══════════════════╯*
*┃                        OWNER ONLY*
*┃╭══════════════════╮*
*┃║ ${_p}ban*
*┃║ ${_p}unban*
*┃║ ${_p}reset*
*┃║ ${_p}restart*
*┃║ ${_p}deletechat*
*┃║ ${_p}mutechat*
*┃║ ${_p}bann* [@user]
*┃║ ${_p}unbann* [@user]
*┃║ ${_p}addprem* [@user]
*┃║ ${_p}delprem* [@user]
*┃║ ${_p}oadd*  [628xxx]
*┃║ ${_p}spamcall*  [8xxx]
*┃║ ${_p}okick*  [@user]
*┃║ ${_p}opromote*  [@user]
*┃║ ${_p}odemote*  [@user]
*┃║ ${_p}ohidetag*  [@user]
*┃║ ${_p}setpp*  [Image]
*┃║ ${_p}on*  [Option]
*┃║ ${_p}off*  [Option]
*┃║ ${_p}enable*  [Option]
*┃║ ${_p}disable*  [Option]
*┃║ ${_p}bc*  [Text]
*┃║ ${_p}bcgc*  [Text]
*┃║ ${_p}setbye*  [Text]
*┃║ ${_p}setwelcome*  [Text]
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃═══════᳀  INGFO  ᳀═══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ Grup: t.me/SGDC_TEAM*
*┃║ Grup: t.me/DesaConfig*
*┃║ Channel: t.me/SobatGretong*
*┃║ Channel: t.me/DesaConfigCh*
*┃║ Donate: nyawer.co/SGDC*
*┃║ Donate: saweria.co/AFD11*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┗━━━━━━━━━━━━━━━━━━━━┛*
`.trim()
 await conn.sendFile(m.chat, img, 'SGDC.jpg', mn, m)
  m.reply('Untuk Menu Gretongan, Ketik *!gretongmenu*')
}

handler.command = /^(menu|help|helep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
