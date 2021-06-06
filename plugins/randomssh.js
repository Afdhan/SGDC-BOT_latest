let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
//  let isEnable = /true|enable|(turn)?on/i.test(command)
let handler  = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {
   if (command == 'ssh' || command == 'randomssh' || command == 'random') {
   let items = (global.Ssh)
   let sss = items[Math.floor(Math.random() * items.length)];
   conn.reply(m.chat, `${sss}\n\n*SGDC-BOT*`, m)
   } else if (command == 'addssh') {
  if (!isOwner) return m.reply('```Lah Ngatur?!```')
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
  await (global.Ssh.push(txt))
  conn.reply(m.chat, '_Berhasil Menambahkan SSH Di Database!_', m)
      }
  }
  
handler.command = /^(addssh|ssh|random(ssh)?)$/i

module.exports = handler

global.Ssh = [
`Thank You For Using Our Services
SSH & OpenVPN Account Info
Username       : free
Password       : free
===============================
Host           : 139.177.190.222
OpenSSH        : 22
Dropbear       : 109, 143
SSL/TLS        : 443, 777
Port Squid     : 3128, 8080 (limit to IP SSH)
OpenVPN        : TCP 1194 http://139.177.190.222:81/client-tcp-1194.ovpn
OpenVPN        : UDP 2200 http://139.177.190.222:81/client-udp-2200.ovpn
OpenVPN        : SSL 442 http://139.177.190.222:81/client-tcp-ssl.ovpn
badvpn         : 7100-7300
===============================
Expired On   : Jun 06, 2021
-s AutoScriptVPS by  Horasss
root@localhost:~#`,
`Thank You For Using Our Services                                             SSH & OpenVPN Account Info
Username       : wibu
Password       : tetapwibu
===============================
Host           : 139.177.190.222
OpenSSH        : 22
Dropbear       : 109, 143
SSL/TLS        : 443, 777
Port Squid     : 3128, 8080 (limit to IP SSH)
OpenVPN        : TCP 1194 http://139.177.190.222:81/client-tcp-1194.ovpn
OpenVPN        : UDP 2200 http://139.177.190.222:81/client-udp-2200.ovpn
OpenVPN        : SSL 442 http://139.177.190.222:81/client-tcp-ssl.ovpn
badvpn         : 7100-7300
===============================
Expired On   : Jun 06, 2021                                                  -s AutoScriptVPS by  Horasss
root@localhost:~#`
]
