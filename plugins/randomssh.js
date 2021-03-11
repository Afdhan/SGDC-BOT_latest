let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.randomssh)}`, m)
}

handler.command = /^(random(ssh)?)$/i
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

global.randomssh = [
'Hostname: sg1.ssh30.hostname.cc\nUsername: akunssh-ayam666\nPassword: STRESS\nOpenSSH: 22\nDropbear: 143, 80\nStunnel: 443, 444 (SSL/TLS)\nUdpgw Port: 7100, 7200, 7300 (For VoIP)\nCreated date: 20-Feb-2021\nExpired date: 22-Mar-2021',
'Hostname: sg1.ssh30.hostname.cc\nUsername: akunssh-sgdc\nPassword: BOT\nOpenSSH: 22\nDropbear: 143, 80\nStunnel: 443 (SSL/TLS)\nUdpgw Port: 7100, 7200, 7300 (For VoIP)\nCreated date: 19-Feb-2021\nExpired date: 21-Mar-2021',
'Host Server: vip-30-1.sshstores.vip\nNama pengguna: Bdbbsxc\nKata sandi: hshbdbx\nPort SSL / TLS: 443,445\nKedaluwarsa: 2021-03-20\nPelabuhan Squid: 80.3128\nDropbear: 442.143\nPort UDPGW : 7313,7300,7390,7385,7376',
'Host Server: vip-30-2.sshstores.vip\nNama pengguna: Mnbbxc\nKata sandi: fnnnncc\nPort SSL / TLS: 443,445\nKedaluwarsa: 2021-03-20\nPelabuhan Squid: 80.3128\nDropbear: 442.143\nPort UDPGW : 7313,7300,7390,7385,7376',
'Hostname: us1.ssh30.hostname.cc\nUsername: akunssh-ayam123\nPassword: puyenh\nOpenSSH: 22\nDropbear: 143, 80\nStunnel: 443, 444 (SSL/TLS)\nUdpgw Port: 7100, 7200, 7300 (For VoIP)\nCreated date: 22-Feb-2021\nExpired date: 24-Mar-2021 ',
'Host: s42.sshpower.net\nUsername: sshpower-anjayyy\nPassword: 1234\nExpired At: 2021-03-24 00:10:53\nDropbear Port: 183,442,443,444\nSSL/TLS Port: 80,993,990,995\nOpenSSH Port: 22,143,110,109\nSquid Port: 81,8080,8000,1080 ',
'Host : sg2-30.jagoanssh.com\nUser : Fkfoc\nPass : 3\nExp : 17-03-2021\nStunnel	442, 443\nDropbear	443, 888, 110, 777\nOpenssh	80, 22, 143\nSquid Proxy	3128, 8080, 8000\nBadvpn Udpgw	7000 - 7900\nSocks Proxy	80 ',
'Host : us1-30.jagoanssh.com\nUser : 12345\nPass : 123\nExp : 23-03-2021\nStunnel	442, 443\nDropbear	443, 888, 110, 777\nOpenssh	80, 22, 143\nSquid Proxy	3128, 8080, 8000\nBadvpn Udpgw	7000 - 7900\nSocks Proxy	80',
'Host : ssh-30-7.sshstores.net\nUsername : Awpkaoek\nPassword : kontolll\nSSL/TLS Port : 443,445\nExpired : 2021-03-26\nSquid Port: 80,3128\nDropbear: 442,143\nUDPGW Port : 7313,7300,7390,7385,7376 ',
'Host: us1.ssl30.cloudssh.host / 54.227.86.164\nUsername: cloudssh.host-welotwelot\nPassword: kangcomot\nOpenSSH: 22\nDropbear:80\nStunnel:443, 444\nUdpgw Port: 7300\nCreated date: 23-Feb-2021\nExpired date: 25-Mar-2021 ',
'Hostname: sg1.ssh30.hostname.cc\nUsername: akunssh-welotwelot\nPassword: angcomot\nOpenSSH: 22\nDropbear: 143, 80\nStunnel: 443, 444 (SSL/TLS)\nUdpgw Port: 7100, 7200, 7300 (For VoIP)\nCreated date: 23-Feb-2021\nExpired date: 25-Mar-2021 ',
]

//Muhammad Afdhan
