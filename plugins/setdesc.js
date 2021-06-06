let handler = async (m, { conn, args, text, isBotAdmin, isAdmin }) => {
        if (!text) return m.reply('```Masukkan Teks```')
        await conn.groupUpdateDescription(m.chat, `${text}`)
        conn.reply(m.chat, '_Berhasil Mengganti Deskripsi Grup!_', m)
 }            
handler.command = /^(setdes(c|k)(ripsi)?(g(rup|c))?)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
