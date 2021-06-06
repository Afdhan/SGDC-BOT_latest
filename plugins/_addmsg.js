let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `_Gunakan *${usedPrefix}list${which}* untuk melihat list!_`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `_'${text}' sudah terdaftar di list_`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'`)
 }
handler.command = /^add(vn|msg|video|audio|img|sticker)$/
handler.owner = true

module.exports = handler
