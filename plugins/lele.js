let handler = async (m, { conn, args }) => {
 await m.reply('_Selamat Tinggal Semuanya :v_')
 conn.groupLeave(m.chat)
}

handler.command = /^(leave|out)$/i
handler.owner = true

handler.fail = null


module.exports = handler
