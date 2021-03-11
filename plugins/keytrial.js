let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.keytrial)}`, m)
}

handler.command = /^(key?trial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

//global.keytrial = [
'["eyJBdXRob3JpemF0aW9uIjp7IklEIjoic1NHcnNtTFRkRlplQTFRQzd5NlJkMi8vTXdldmZ5a0NXd1VBam9rejVmMD0iLCJBY2Nlc3NUeXBlIjoiZ29vZ2xlLXN1YnNjcmlwdGlvbiIsIkV4cGlyZXMiOiIyMDIxLTAzLTAxVDA4OjMxOjQxWiJ9LCJTaWduaW5nS2V5SUQiOiJSY1g1K0pBZVVPam9XY0hvajQ1NjhYc1ZsQWJzMFFhc0FqKzFBRDYrbndRPSIsIlNpZ25hdHVyZSI6ImpOZTc1cmJVK2Q4R0tpYmNKZ1I3ekZLNlViY2twSWc3eE1ZUTlWY2dVTXptWkdoREpjR214cms2REpHUFlLdTZFQnhGYUFZbi9ISE9EOGJlVVIyeUJnPT0ifQ=="]\n\n"Expires":"2021-03-02 T21:59:26Z"\n\n*• SGDC - BOT •*',
'["eyJBdXRob3JpemF0aW9uIjp7IklEIjoiTXdTZkhmS0hKZDhUZE95dHhnU01sOVhLU0hNZDlzaitROG1JZUIyYXpJRT0iLCJBY2Nlc3NUeXBlIjoiZ29vZ2xlLXN1YnNjcmlwdGlvbiIsIkV4cGlyZXMiOiIyMDIxLTAzLTAxVDA4OjQyOjA3WiJ9LCJTaWduaW5nS2V5SUQiOiJSY1g1K0pBZVVPam9XY0hvajQ1NjhYc1ZsQWJzMFFhc0FqKzFBRDYrbndRPSIsIlNpZ25hdHVyZSI6Ilp4SVlYUDBoeWVPUStVK2dQMGtjZUFnbmR0WmMrYURacWJDelBJclV4YlFqUUk5VHB5WjVacGNtcUY5V3ljaGJRSlpWM1VpTmVVQUIxR3dXdm9BL0RnPT0ifQ=="]\n\n"Expires":"2021-03-02 T21:59:26Z"\n\n*• SGDC - BOT •*',
'["eyJBdXRob3JpemF0aW9uIjp7IklEIjoiMnZhUUV3ZVlYMEpJUlVtTnBGSzBDcW0zbER2ZTNBWE5zQkxnZ3JOOHRHaz0iLCJBY2Nlc3NUeXBlIjoiZ29vZ2xlLXN1YnNjcmlwdGlvbiIsIkV4cGlyZXMiOiIyMDIxLTAzLTAxVDA4OjU4OjM3WiJ9LCJTaWduaW5nS2V5SUQiOiJSY1g1K0pBZVVPam9XY0hvajQ1NjhYc1ZsQWJzMFFhc0FqKzFBRDYrbndRPSIsIlNpZ25hdHVyZSI6IkpyU2dwRVNZbURrbGNxb2VJTlBBdmFWcE5LVkcyMXpZeWRkZnVYaWdBbnY5NVRZeTVMZzZkamd3M1BSc3VVNmVlQm5YM1VuTGlCTytIcDJIS3JyaUJBPT0ifQ=="]\n\n"Expires":"2021-03-02 T21:59:26Z"\n\n*• SGDC - BOT •*',
]
