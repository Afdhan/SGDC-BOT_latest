let chalk = require("chalk");
let handler = async (m, { conn, command, args }) => {
  try{
	if (command == 'pin') {
	await conn.modifyChat(m.chat, 'pin')
	console.log(chalk.cyan('PIN PESAN CHAT'))
        m.reply('```Berhasil Pin Chat```')
	}else if(command == 'unpin') {
	await conn.modifyChat(m.chat, 'unpin')
	console.log(chalk.cyan('UNPIN PESAN CHAT'))
    m.reply('```Berhasil Unpin Chat```')
    }
 } catch (e) {
 	m.reply("```ERROR```")
    console.log(chalk.red(e))
 }
}

handler.command = /^(un)?pin$/i
handler.owner = true

module.exports = handler
