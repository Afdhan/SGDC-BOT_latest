let handler = async (m, { conn, args }) => {
 await m.reply('Selamat Tinggal:v')
 conn.groupLeave(m.chat)
}

handler.command = /^leave$/i
handler.owner = true

handler.fail = null


module.exports = handler
