let handler = m => m

let badRegex= pickRandom(['anjing','kontol','bangsat','ngentot','ngewe','memek','tolol','pepek','goblok','gblk','ngeue',',kntl','jancok','ajg',asu',ngntd',bgsd',bgst'])
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isBadWord = badRegex.exec(m.text)
  if (chat.antiToxic && isBadWord) m.reply('Ngontoll')
  return true
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


module.exports = handler



