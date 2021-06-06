let handler = async (m, { conn, text }) => {
  if (!text) throw 'Teks Nya Mana?'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.command = /^mention$/i

module.exports = handler
