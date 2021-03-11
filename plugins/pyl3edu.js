let handler = async m => m.reply(`
*╭═════════════════════╮*
                        *Payload Three Edukasi*
*┏═════════════════════╯*
*║  PAYLOAD*
*┣━━━━━━►*
*║CONNECT [host_port] [protocol]\r*
*║Host: classroom.google.com\r*
*║Connection: keep-alive\r*
*║Proxy-Connection: keep-alive\r*
*║X-Online-Host: classroom.google.com\r*
*║X-Forward-Host: classroom.google.com\r*
*║\r*
*║*
*┣► Mode Direct*
*┣► Pakai Port Dropbear*
*┗═════════════════════╮*
                                 *SGDC-TEAM*
*┏═════════════════════╯*
*║★ https://t.me/SGDC_TEAM*
*║★ https://t.me/SobatGretong*
*║★ https://t.me/DesaConfig*
*║★ https://t.me/DesaConfigCh*
*┗═════════════════════╮*
                                  *SGDC - BOT*
*╰═════════════════════╯*
`.trim()) 


handler.command = /^(payloadtriedu?kasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
