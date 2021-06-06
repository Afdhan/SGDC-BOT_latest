const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*SGDC-BOT*'
        })
    } catch (e) {
        console.log(e)
        throw '_Error_'
    }
}

handler.command = /^(wallpaper|wp)anime$/i

module.exports = handler
