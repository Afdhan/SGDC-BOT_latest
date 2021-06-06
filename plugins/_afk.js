let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`
@${m.sender.split("@")[0]} Berhenti AFK!${user.afkReason ? ' Setelah ' + user.afkReason : ''}
Selama: _${clockString(new Date - user.afk)}_

*SGDC-BOT*
`.trim(), { contextInfo: { mentionedJid: [user] }})
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`
Jangan tag @${jid.split("@")[0]}!
Dia Lagi AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
Selama: _${clockString(new Date - afkTime)}_

*SGDC-BOT*
`.trim(), { contextInfo: { mentionedJid: [jid] }})
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
