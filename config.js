let sgdc = require('./sgdc.json')

global.owner = [(sgdc.owner)]
global.mods = ['6282252655313']
global.packname = (sgdc.packname)
global.author = (sgdc.author)
global.prems = ['6282252655313']
global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'Your-Apikey'
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
global.rowner = ['6282252655313']
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
