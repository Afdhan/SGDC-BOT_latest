let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Masukan Text!*', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!* _Maksimal 10 huruf!_', m)

    let link = 'https://arugaz.my.id/api/textpro/bokehtext?text=' + text

    conn.sendFile(m.chat, link, 'bokeh.jpg', 'Tobat tod!', m)
}

handler.command = /^(bokehtext|bokeh)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
