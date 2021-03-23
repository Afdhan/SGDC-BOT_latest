let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
//  let res = await fetch({ kata: text }, `https://st4rz.herokuapp.com/api/simsimi?kata=${text}`)
//  let json = await res.json()
let res = axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
  else throw json
  }
                                                                       
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

