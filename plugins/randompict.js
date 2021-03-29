let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
    if (user.prems) {
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
    let url = "https://api.fdci.se/rep.php?gambar=" + text
    let str = `
*[ • SGDC-BOT • ]*
`.trim()
    
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let pict =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(pict) 
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); 
    
    conn.sendFile(m.chat, buf, 'SGDC-BOT.jpg', str, m)
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

handler.command = /^(pict|randompict)$/i


handler.fail = null


module.exports = handler