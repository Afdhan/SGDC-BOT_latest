//let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.query({
        json: ["action", "invite", code]
    })
    if (res.status !== 200) throw res
    m.reply(`Berhasil join grup ${res.gid}`)
}

handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler
