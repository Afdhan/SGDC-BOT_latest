let fs = require ('fs')
let path = require('path')
let { performance } = require('perf_hooks'){
let old = performance.now()
let neww = performance.now()
}
let ping = performance.now(neww - old)
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
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let name = conn.getName(m.sender)
let handler  = async (m, { conn, usedPrefix  }) => {`
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ YourName : _${name}_*
*┃║ BotName :    SGDC - BOT*
*┃║ Version :       1.4.0 (beta)*
*┃║ Prefix :          ( ${_p} )*
*┃║ Date :             ${week}, ${date}*
*┃║ Time :            ${time}*
*┃║ Uptime :        _${uptime} (${muptime})_*
*┃║ PingSpeed : _${ping} MS_*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ LIST MENU ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${usedPrefix}gretongmenu*
*┃║★ ${usedPrefix}makermenu*
*┃║★ ${usedPrefix}internetmenu*
*┃║★ ${usedPrefix}groupmenu*
*┃║★ ${usedPrefix}adminmenu*
*┃║★ ${usedPrefix}ownermenu*
*┃║★ ${usedPrefix}optionmenu*
*┃║★ ${usedPrefix}toolsmenu*
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

handler.command = /^(nenen)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler