let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
//  let res = await fetch({ kata: text }, `https://st4rz.herokuapp.com/api/simsimi?kata=${text}`)
//  let json = await res.json()
 axios.get(`https://videfikri.com/api/simsimi/?teks=${text}`).then((res) => {
  let hh = `${res.data.result.jawaban}`
 /* if (json.status)*/ conn.reply(m.chat, hh, m)
  //else throw json
  })
}
                                                                       

//handler.customPrefix = /(\?$)/ 
handler.command = /^(si(mi)?(m)?)$/i

module.exports = handler

