let handler = m => m

let toxic = pickRandom(['anjing','kontol','bangsat','ngentot','ngewe','memek','tolol'])
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  

  if (chat.antiToxic) m.reply('Kata Toxic Terdeteksi! Anda Akan Dikeluarkan Otomatis Oleh SGDC-BOT')
  await conn.groupRemove([m.chat])
  return true
}



handler.botAdmin = true

handler.fail = null

module.exports = handler



