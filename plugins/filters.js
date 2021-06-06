const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let axios = require('axios')
let kntl = require('../src/kntl.json')
let handler = async (m, { conn, text, command }) => {
  let api = (kntl.lolkey2)
  m.reply(global.wait)
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) m.reply(`Foto Aja Om`)
  let img = await q.download()
  let url = await uploadImage(img)
  let ress = `https://lolhuman.herokuapp.com/api/filter/${command}?apikey=${api}&img=${url}`
   await conn.sendFile(m.chat, ress, "SGDC-BOT.jpg", "*SGDC-BOT*", m)
   let stiker = await sticker(null, ress, global.packname, global.author)
     conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply("```ERROR```")
   console.error(e)
  }
}

handler.command = [
'lofi',
'1977',
'aden',
'moon',
'kelvin',
'lark',
'maven',
'mayfair',
'earlybird',
'brannan',
'brooklyn',
'clarendon',
'gingham',
'hudson',
'inkwell',
'nashville',
'perpetua',
'reyes',
'rise',
'slumber',
'stinson',
'toaster',
'valencia',
'walden',
'willow',
'xpro2',
]
module.exports = handler
