let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
				    conn.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return m.reply(`_Kirim gambar dengan caption *${usedPrefix}setpp* atau tag gambar yang sudah dikirim!_`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(enmedia)
					await conn.updateProfilePicture(botNumber, media)
					m.reply('_Success Change Profile Picture!_')
}

handler.command = /^setpp$/i
handler.owner = true

module.exports = handler