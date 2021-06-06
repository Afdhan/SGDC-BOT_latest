module.exports = {
    async before(m) {
        this.game = this.game ? this.game : {}
        let id = 'family100_' + m.chat
        if (!(id in this.game)) return !0
        let room = this.game[id]
        let text = m.text.toLowerCase()
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (!isSurrender) {
            let index = room.jawaban.indexOf(text)
            if (index < 0) return !0
            if (room.terjawab[index]) return !0
            let users = global.DATABASE.data.users
            room.terjawab[index] = m.sender
            users.exp += room.winScore
        }
        let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
        let caption = `
*Soal:* ${room.soal}

${Array.from(room.jawaban, (jawaban, index) => {
            return isSurrender || room.terjawab[index] ? `${index + 1} > ${jawaban} ${room.terjawab[index] ? '[ @' + room.terjawab[index].split('@')[0] + ' ]' : ''}`.trim() : false
        }).filter(v => v).join('\n')}

*SGDC-BOT*
    `.trim()
        m.reply(caption, null, {
            contextInfo: {
                mentionedJid: this.parseMention(caption)
            }
        }).then(msg => {
            return this.game[id].msg = msg
        })
        if (isWin || isSurrender) delete this.game[id]
        return !0
    }
}
