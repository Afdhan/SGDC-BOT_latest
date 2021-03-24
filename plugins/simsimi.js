let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
//  let res = await fetch({ kata: text }, `https://st4rz.herokuapp.com/api/simsimi?kata=${text}`)
//  let json = await res.json()
 axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${text}`).then((res) => {
  let hh = `${res.data.result}`
 /* if (json.status)*/ conn.reply(m.chat, hh, m)
  //else throw json
  })
}
                                                                       

handler.customPrefix = /(\?$)/ 
handler.command = /^(s)$/i

module.exports = handler

