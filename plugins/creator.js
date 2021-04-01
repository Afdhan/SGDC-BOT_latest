let handler = function (m) {
  this.sendContact(m.chat, '6282252655313', '꧁࿇ ᴍ ᴀꜰᴅʜᴀɴ ࿇꧂ || @dhans11__', m)
m.reply('*Jangan Lupa Donasi :v')
//let pp_owner ='src/Owner.jpg'
//conn.sendFile(m.chat, pp_owner, 'My Owner.jpg', '*This is my owner ᴍ ᴀꜰᴅʜᴀɴ*\n*Contact: https://wa.me/6282252655313*', m)
}

handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
