let name = conn.getName(m.sender)
let d = new Date
let locale = 'id'
let exp = global.DATABASE.data.users[m.sender].exp
let limit = global.DATABASE.data.users[m.sender].limit
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
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
/*let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)*/
    let uptime = clockString(_uptime)
let handler  = async (m, { conn, usedPrefix: _p }) => m.reply(`
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ YourName :   ${name}*
*┃║ BotName :    SGDC - BOT*
*┃║ Version :       1.4.0 (beta)*
*┃║ Tanggal :      ${week} ${date}
*┃║ Waktu :         ${time}
*┃║ Uptime:        ${uptime}*
*┃║ Prefix :          ( ${_p} )*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ LIST MENU ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}gretongmenu*
*┃║★ ${_p}makermenu*
*┃║★ ${_p}internetmenu*
*┃║★ ${_p}groupmenu*
*┃║★ ${_p}adminmenu*
*┃║★ ${_p}ownermenu*
*┃║★ ${_p}optionmenu*
*┃║★ ${_p}toolsmenu*
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
`.trim()) 

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
