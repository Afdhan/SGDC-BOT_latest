global.owner = ['6282252655313'] // Put your number here
global.mods = ['6282252655313']
global.prems = ['6282252655313']
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}
global.packname = 'ŠĞĎČ-BØŤ'
global.author = 'ᴍ ᴀꜰᴅʜᴀɴ'



let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
