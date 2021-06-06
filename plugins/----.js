let handler = async (m, { conn, args, text }) => {
     try{
	let user = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
	let tytyd = `${user.split("@s.whatsapp.net")[0]}`
	let url = "https://wa.me/" + tytyd
	//let text = args.join(" ")
	if(text){
	let teks = text.replace(/ /g, "+")
    url = "https://wa.me/" + tytyd + "?text=" + teks
	}
	conn.reply(m.chat, url, m)
     }catch (e){
	     m.reply("```ERROR```")
	     console.log(e)
     }
}
handler.command = /^wa(link|url)$/i
module.exports = handler
