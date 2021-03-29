let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
    let items = ["cowok idaman", "cowo ganteng", "cowok personil bts", "korean boy", "artis cowok korea", "cowok korea", "cowok jepang"];
    let cowo = items[Math.floor(Math.random() * items.length)];
    let url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    let str = `
 *[ • SGDC-BOT • ]*
`.trim()
    
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let cowok =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cowok)
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64');

    conn.sendFile(m.chat, buf, 'JanganGay.jpg', str, m)
            }
        )
        .catch(
            (error) => {
                console.log(error); 
            }
        )
    
    });
  } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(cogan|cowok)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

// MUHAMMAD AFDHAN