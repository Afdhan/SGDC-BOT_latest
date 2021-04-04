let handler = function (m) {
  this.sendContact(m.chat, '6282286818715', ' IPAN-XYZ || @dhans11__', m)
m.reply('wa.me/6282286818715')
//let pp_owner ='src/Owner.jpg'
//conn.sendFile(m.chat, pp_owner, 'My Owner.jpg', '*This is my owner ᴍ ᴀꜰᴅʜᴀɴ*\n*Contact: https://wa.me/6282252655313*', m)
}

handler.command = /^(owner|creator)$/i

handler.fail = null

module.exports = handler
