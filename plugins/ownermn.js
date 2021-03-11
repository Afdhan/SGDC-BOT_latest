let handler  = async (m, { conn, usedPrefix: _p }) => {`
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ BotName :    SGDC - BOT*
*┃║ Version :       1.4.0 (beta)*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ OWNER MENU ᳀═════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}ban*
*┃║★ ${_p}unban*
*┃║★ ${_p}reset*
*┃║★ ${_p}restart*
*┃║★ ${_p}deletechat*
*┃║★ ${_p}mutechat*
*┃║★ ${_p}oadd*  [628xxx]
*┃║★ ${_p}okick*  [@user]
*┃║★ ${_p}opromote*  [@user]
*┃║★ ${_p}odemote*  [@user]
*┃║★ ${_p}ohidetag*  [@user]
*┃║★ ${_p}enable*  [Option]
*┃║★ ${_p}disable*  [Option]
*┃║★ ${_p}bc*  [Text]
*┃║★ ${_p}bcgc*  [Text]
*┃║★ ${_p}setbye*  [Text]
*┃║★ ${_p}setwelcome*  [Text]
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

handler.command = /^(ownermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
