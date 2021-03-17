const translate = require('translate-google-api')

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `*Contoh:\n*• ${usedPrefix}translate id|Love you*\n\n*_Untuk Melihat List Bahasa, Ketik_ ${usedPrefix}listbahasa*`

    let [to, trans] = text.split`|`

    if (!to) return conn.reply(m.chat, `*Masukan Kode Bahasa!*\n*Contoh:*\n*• ${usedPrefix}translate id|Love you*`, m)
    if (!trans) return conn.reply(m.chat, `*Masukan Text Yang Ini Diterjemah!*\n*Contoh:*\n*• ${usedPrefix}translate id|Love you*`, m)

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(m.chat, `${text}\n\nTranslate: ` + result[0])
    } catch (e) {
        m.reply('_Maaf Error!_')
    }

}

handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
