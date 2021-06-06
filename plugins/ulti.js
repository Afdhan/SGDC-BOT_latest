let handler = async (m, { conn, args, isOwner, isBotAdmin }) => {
   if(!isOwner) return
   if(!isBotAdmin) return
  try {
   let user = m.mentionedJid ? m.mentionedJid[0] : m.quoted.sender
   if(!user) return
   await conn.groupRemove(m.chat, [user])
   /*if(user === m.mentionedJid && m.mentionedJid.length > 1) {
   for(let i = 0; i < user.length; i++) {
     await conn.groupRemove(m.chat, user[i])
    }
   }*/
  }catch(e){ 
     console.log(e) 
   }
 }

handler.command = new RegExp
handler.customPrefix = /(kill|ulti)/i
module.exports = handler
