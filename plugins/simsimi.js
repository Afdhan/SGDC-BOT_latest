let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {

 axios.get(`https://videfikri.com/api/simsimi/?teks=${text}`).then((res) => {
  let hh = `${res.data.result.jawaban}`
conn.reply(m.chat, hh, m)
  })
}
                                                                       
handler.command = /^(si(mi)?(m)?)$/i

module.exports = handler

