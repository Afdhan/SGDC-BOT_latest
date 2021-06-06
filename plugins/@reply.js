const { MessageType } = require("@adiwajshing/baileys");
const fs = require("fs");
let handler = async (m, { conn, text }) => {
if (m.quoted.fromMe || m.quoted.isBaileys) {
    let stik = fs.readFileSync("./src/stiker.webp")
    let pp = fs.readFileSync("./src/SGDC-BOT.jpg")
    let tytyd =  {
      key: { 
      remoteJid: '6283159600193-1620323735@g.us',
      participant: '0@s.whatsapp.net', 
      fromMe: false 
     }, 
      message: { 
        "imageMessage": { 
        "mimetype": "image/jpeg", 
        "caption":  '*SGDC-BOT BY MUHAMMAD AFDHAN*', 
        "jpegThumbnail": pp
       }
    }
}
    conn.sendMessage(m.chat, stik, MessageType.sticker, tytyd)
    }
 }
module.exports = handler
