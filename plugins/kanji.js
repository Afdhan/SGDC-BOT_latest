let fetch = require("node-fetch")
let handler = async(m, { conn, text }) => {
	if (!text) return m.reply ("_Masukkan Kanji Nya_")
 try {
     let res = await fetch("https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(text))
     let json = await res.json()
     let { 
kanji, 
grade, 
stroke_count, 
meanings, 
kun_readings, 
on_readings, 
name_readings, 
jlpt,
unicode, 
heisig_en 
} = json
     
let pess = `
Kanji: ${kanji}
Arti: ${meanings}
Kun Reading: ${kun_readings}
On Reading: ${on_readings}
Name Reading: ${name_readings}
Grade: ${grade}
Stroke: ${stroke_count}
JLPT: ${jlpt}
Unicode: ${unicode}
Heisig En: ${heisig_en}

*SGDC-BOT*
`.trim()
    conn.reply(m.chat, pess, m)
	 
    }catch (e){
    	m.reply("Error")
    console.log (e)
    }
 }


handler.command = /^(kan(ji)?)$/i

module.exports = handler
