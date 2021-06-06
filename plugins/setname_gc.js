let handler = async (m, { conn, args, text, isBotAdmin, isAdmin }) => {
        if (!text) return m.reply('```Masukkan Nama Grup```')
        await conn.groupUpdateSubject(m.chat, `${text}`)
        conn.reply(m.chat, '_Berhasil Mengganti Nama Grup!_', m)            
}

handler.command = /^(setnameg(c|rup|roup)?)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
