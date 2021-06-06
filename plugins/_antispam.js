let handler = (m) => m

handler.all = async function (m) {
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        let rowner = "6282252655313@s.whatsapp.net"
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                if(m.sender == rowner) return !0
               // m.reply("```Anda Dibanned Karena Spam !!!```")
            //global.DATABASE._data.users[m.sender].banned = true
           /* if(isBotAdmin && m.isGroup) {
            	await m.reply('Spam Detected! Anda Akan Di Kick Oleh SGDC-BOT')
            	this.groupRemove(m.chat, m.sender)
            }else*/
              if(!m.isGroup) {
            	await m.reply('Spam Detected! Anda Akan Di Blokir Oleh SGDC-BOT')
            	this.blockUser(m.sender, "add")
            }
         }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else this.spam[m.sender] = {
        jid: m.sender,
        count: 0,
        lastspam: 0
    }
}

module.exports = handler
