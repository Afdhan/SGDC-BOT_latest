let handler = async (m, { conn, text }) => {
    if (!text) throw 'masukan pesan yg mau dicari!'
    let split = text.split`|`
    let result = await conn.searchMessages(split[0], m.chat, split[1], 1)
    if (result.messages.length > 0) {
        let total = result.messages.length
        let sp = total < Number(split[1]) ? `Hanya ditemukan ${total} pesan ngab` : `Ditemukan ${total} pesan`
        m.reply(sp)

        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
            let _message = await conn.loadMessage(_remoteJid, _ids)
            conn.reply(m.chat, 'Nih pesannya', _message)
        })
    }
}              
/*
       } else if(command == 'load' || command == 'loadmsg') {
        let user = m.mentionedJid[0]
        let mess = await conn.loadMessages(m.chat, user)
        conn.reply(m.chat, `Total Pesan *${mess.length}*`, m)
      } else throw 'Terjadi Kesalahan'
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
*/
handler.command = /^(search|srch|load(msg)?)$/

module.exports = handler
