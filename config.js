global.owner = ['6282252655313']
global.mods = ['6282252655313']
global.packname = 'ŠĞĎČ-BØŤ'
global.author = 'M AFDHAN'
global.prems = ['6282252655313','6283122891105']
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'abba3220ce4a347f'
}

global.rowner = ['6282252655313']
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
