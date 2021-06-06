let handler = function (m) {
  if (!m.quoted) throw '_Reply Pesan SGDC-BOT!_'
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw '_Hanya dapat menghapus pesan dari SGDC-BOT!_'
  if (!isBaileys) throw '_Pesan tersebut bukan dikirim oleh SGDC-BOT!_'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}

handler.command = /^del(ete)?$/i

module.exports = handler
