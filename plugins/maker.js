let handler  = async (m, { conn, usedPrefix: _p }) => {`
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ BotName :    SGDC - BOT*
*┃║ Version :       1.4.0 (beta)*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ LIST MENU ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}qr*  [Text]
*┃║★ ${_p}ttp*  [Text]
*┃║★ ${_p}attp*  [Text]
*┃║★ ${_p}toimg*  [Reply]
*┃║★ ${_p}style*  [Text]
*┃║★ ${_p}tahta*  [Text]
*┃║★ ${_p}sgdc*  [Text]
*┃║★ ${_p}nulis*  [Text]
*┃║★ ${_p}sticker*  [Image]
*┃║★ ${_p}readmore*  [Text] | [Text]
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

handler.command = /^(maker?menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
