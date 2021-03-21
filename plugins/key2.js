let handler = m => m

let key = /^(key|keytrial|trial|trialpopon|popon|keypopon)$/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isKeyTrial = key.exec(m.text)
  if (isKeyTrial) m.reply(`${pickRandom(global.key)}`)
  return true
}

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.key = [
' ["eyJBdXRob3JpemF0aW9uIjp7IklEIjoiWGhvRFZWaC9NUFE4alFsMUhoNzBPQTFPZG1xbzdRNGFFU2F5Q3RzTWxkST0iLCJBY2Nlc3NUeXBlIjoiZ29vZ2xlLXN1YnNjcmlwdGlvbiIsIkV4cGlyZXMiOiIyMDIxLTAzLTI2VDE3OjI0OjU4WiJ9LCJTaWduaW5nS2V5SUQiOiJSY1g1K0pBZVVPam9XY0hvajQ1NjhYc1ZsQWJzMFFhc0FqKzFBRDYrbndRPSIsIlNpZ25hdHVyZSI6InpNZWdjMm1EU3NXVXI5NjJYZ01YZkovdy9ka3BPamlUN015YzVueWpSOG92RHBRbDB2VklpVDl1OFlOZXRsVzdJOXZGc2xVMDRHUURuc0ZIblFGZEFnPT0ifQ=="]\n\n_"Expires":"2021-03-26T01:47:57Z"_ ',
' ["eyJBdXRob3JpemF0aW9uIjp7IklEIjoieWhudGxNMW4yZHY1TDkwTkVkU2RPN1VXa1lxald6aHhlOTVDUnVETGZVcz0iLCJBY2Nlc3NUeXBlIjoiZ29vZ2xlLXN1YnNjcmlwdGlvbiIsIkV4cGlyZXMiOiIyMDIxLTAzLTI1VDA0OjQ3OjM3WiJ9LCJTaWduaW5nS2V5SUQiOiJSY1g1K0pBZVVPam9XY0hvajQ1NjhYc1ZsQWJzMFFhc0FqKzFBRDYrbndRPSIsIlNpZ25hdHVyZSI6ImlKR3c1YWVCaVlJT2ZkL3d6RGJVWEJOeWlFREtZU0JqTnZtVTV4a245enpyNTF6aGlkTXVjL2Jrby9RVG1xaFBVN3kwN090UmFKRzh0REV2b056UkRnPT0ifQ=="]\n\n_"Expires":"2021-03-26T04:47:37Z"_ ',
' ["eyJBdXRob3JpemF0aW9uIjp7IklEIjoiNDZHeURVOTB4L3JtVlYvTE9yRGdiMnJCWWF5M2dwMUF1NkZaUXZKUXVJYz0iLCJBY2Nlc3NUeXBlIjoiZ29vZ2xlLXN1YnNjcmlwdGlvbiIsIkV4cGlyZXMiOiIyMDIxLTAzLTI2VDE3OjA3OjE2WiJ9LCJTaWduaW5nS2V5SUQiOiJSY1g1K0pBZVVPam9XY0hvajQ1NjhYc1ZsQWJzMFFhc0FqKzFBRDYrbndRPSIsIlNpZ25hdHVyZSI6IkhkS1piZ1BWSTFjZk0yMXBjZFo1dTI0NE5zVlNmUWRaczB5bzQxUmZ0K2Z2c21QV3ZZTkx2NldpOU9YSWd5ZjdMTFBDN0pOYUlTNWN6L0RHUHZXV0F3PT0ifQ=="]\n\n_"Expires":"2021-03-26T409:27:17Z"_ ',
]