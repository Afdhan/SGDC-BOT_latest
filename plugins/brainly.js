const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Pertanyaannya mana?'
  let res = await brainly(text)
    let answer = res.data.map((v, i) => `*━━► ᴩᴇʀᴛᴀɴyᴀᴀɴ ᴋᴇ ${i + 1}:*\n${v.pertanyaan}\n\n${v.jawaban.map((v,i) => `*━━► ᴊᴀᴡᴀʙᴀɴ ᴋᴇ ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n\n*[ • SGDC-BOT • ]━━━━━━━━━━━━━►*\n\n\n')
  m.reply(answer)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^(brain|brainly|bl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

module.exports = handler
