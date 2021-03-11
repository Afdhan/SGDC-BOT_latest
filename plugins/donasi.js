let handler = async m => m.reply(`
╭─────「 Donasi 」
│ • *Pulsa Telkomsel [082252655313]*
│ • *Saldo Dana [082252655313]*
│ • *Saweria [https://saweria.co/AFD11]*
│ • *Nyawer [https://nyawer.co/SGDC]*
╰────────────────────────
`.trim())

handler.command = /^dona(te|si)$/i

module.exports = handler
