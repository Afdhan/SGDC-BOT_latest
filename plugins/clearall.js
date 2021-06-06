let handler = async (m, { conn, command, args }) => {
	let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
	let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
	for(let id of chats) {
	await conn.modifyChat(id, 'delete', {
      includeStarred: false
    }).catch(console.log)
  }
    m.reply("```Success Clear All Chats```")
}
handler.command = /^((clear|delete)all)$/i
handler.rowner = true
module.exports = handler
