let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw '```Fitur Ini Hanya Untuk Di Grup!```'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw '```Metadata Tidak Diketahui!```'
  if (!'participants' in groupMetadata) throw '```Participants Tidak Ditemukan!```'
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw '```SGDC-BOT Tidak Ada Di Grup Itu!```'
  if (me.isAdmin !== true) throw '```SGDC-BOT Bukan Admin Di Grup Itu!```'
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(group)) + '\n\nJoin: https://t.me/SobatGretong\n\n*SGDC-BOT*', m)
}

handler.command = /^(linkgrup|linkgc|link|linkgroup)$/i

module.exports = handler

