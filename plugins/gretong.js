let handler  = async (m, { conn, usedPrefix: _p }) => m.reply(`
*┏━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ SGDC - BOT ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║ BotName :    SGDC - BOT*
*┃║ Version :       1.4.0 (beta)*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃═════᳀  Configuration  ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}axisgame*
*┃║★ ${_p}axisedukasi*
*┃║★ ${_p}axischat*
*┃║★ ${_p}axismusic*
*┃║★ ${_p}axistiktok*
*┃║★ ${_p}axisconference*
*┃║★ ${_p}axissosmed*
*┃║★ ${_p}xlchat*
*┃║★ ${_p}xlunli*
*┃║★ ${_p}xlcombo*
*┃║★ ${_p}xlconference*
*┃║★ ${_p}triedukasi*
*┃║★ ${_p}imclass*
*┃║★ ${_p}isatkemendikbud*
*┃║★ ${_p}unlimax*
*┃║★ ${_p}unliapps*
*┃║★ ${_p}unlichat*
*┃║★ ${_p}unliwa*
*┃║★ ${_p}facebook*
*┃║★ ${_p}youtube*
*┃║★ ${_p}tiktok*
*┃║★ ${_p}instagram*
*┃║★ ${_p}kbssl*
*┃║★ ${_p}kbdirek*
*┃║★ ${_p}kemendikbud*
*┃║★ ${_p}gamemax*
*┃║★ ${_p}musicmax*
*┃║★ ${_p}maxtream*
*┃║★ ${_p}tselopok*
*┃║★ ${_p}omg*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃═══════᳀ List Bug ᳀═══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}bugig*
*┃║★ ${_p}bugwa*
*┃║★ ${_p}bugfb*
*┃║★ ${_p}bugff*
*┃║★ ${_p}bugyt*
*┃║★ ${_p}bugcod*
*┃║★ ${_p}bugunli*
*┃║★ ${_p}bugimclass*
*┃║★ ${_p}bugopok*
*┃║★ ${_p}bugzoom*
*┃║★ ${_p}bugpubg*
*┃║★ ${_p}bugtiktok*
*┃║★ ${_p}bughbogo*
*┃║★ ${_p}bugmicrosoft*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃═════᳀  Payload Inject  ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}payloadkuotabelajar*
*┃║★ ${_p}payloadgamemax*
*┃║★ ${_p}payloadimclass*
*┃║★ ${_p}payloadaxisedukasi*
*┃║★ ${_p}payloadisatopok*
*┃║★ ${_p}payloadunlimax*
*┃║★ ${_p}payloadtriedukasi*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃══════᳀ Secure SHell ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}sshindo*
*┃║★ ${_p}univ*
*┃║★ ${_p}randomssh*
*┃║★ ${_p}keytrial* _(none)_
*┃║★ ${_p}ipopok*
*┃║★ ${_p}ipedukasi*
*┃╰══════════════════╯*
*┣━━━━━━━━━━━━━━━━━━━━┓*
*┃═════᳀  V2ray Vmess  ᳀══════*
*┣━━━━━━━━━━━━━━━━━━━━┛*
*┃╭══════════════════╮*
*┃║★ ${_p}v2rayimclass* 
*┃║★ ${_p}v2rayopok*
*┃║★ ${_p}v2rayaxis*
*┃║★ ${_p}v2raytsel* _(none)_
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

handler.command = /^(gretong(menu))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

