let handler  = async (m, { conn }) => {
  conn.reply(`
*Universitas Brawijaya*

*_Scan Nomor:_ ${pickRandom(global.number)}*
*> _${pickRandom(global.ube)}_*

`.trim()) 
}

handler.command = /^(ub|univ)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.number = [
'01','02','03','04','05','06','07','08','09','10',
'11','12','13','14','15','16','17','18','19','20',
'21','22','23','24','25','26','27','28','29','30',
'31','32','33','34','35','36','37','38','39','40',
'41','42','43','44','45','46','47','48','49','50',
'51','52','53','54','55','56','57','58','59','60',
'61','62','63','64','65','66','67','68','69','70',
'71','72','73','74','75','76','77','78','79','80',
'81','82','83','84','85','86','87','88','89','90',
'91','92','93','94','95','96','97','98','99','100',
]



global.ube = [
' [ MODAR ] 195030801111020:aldinur ',
' [ MODAR ] 195030801111020:aldinur1234 ',
' [ MODAR ] 195030807111028:alelomasae ',
' [ MODAR ] 195030807111028:aleloma ',
' [ AKTIF ] 175130101111044:jusanti123
' [ MODAR ] 195030807111028:aleloma1234 ',
' [ MODAR ] 195030807111028:lomasae ',
' [ MODAR ] 195030807111028:lomasae1234 ',
' [ MODAR ] 195030807111028:alesae ',
' [ MODAR ] 195030807111028:alesae1234 ',
' [ AKTIF ] 185080300111030:faizan123 ',
' [ MODAR ] 205030807111015:aaliyahputri ',
' [ MODAR ] 205030800111023:hasbizulfi ',
' [ MODAR ] 205030800111023:hasbizulfi1234 ',
' [ MODAR ] 205030800111023:muhammadzulfi ',
' [ MODAR ] 205030800111023:muhammadzulfi1234 ',
' [ AKTIF ] 195090301111030:noorsha123 ',
' [ MODAR ] 205030807111027:muhammadihsanfarid ',
' [ MODAR ] 205030807111027:muhammadihsan ',
' [ MODAR ] 205030807111027:muhammadihsan1234 ',
' [ MODAR ] 205030807111027:ihsanfarid ',
' [ MODAR ] 205030807111027:ihsanfarid1234 ',
' [ AKTIF ] 205080407113032:fardhian123 ',
' [ MODAR ] 205030807111027:muhammadfarid ',
' [ MODAR ] 205030807111027:muhammadfarid1234 ',
' [ MODAR ] 195030800111040:muhammadikhwanfawwaz ',
' [ MODAR ] 195030800111040:muhammadikhwan ',
' [ AKTIF ] 185080301111020:adellia123 ',
' [ MODAR ] 205030807111015:aaliyahputri1234 ',
' [ MODAR ] 205030807111015:putrisyaafira ',
' [ MODAR ] 205030807111015:putrisyaafira1234 ',
' [ MODAR ] 205030807111015:aaliyahsyaafira ',
' [ MODAR ] 205030807111015:aaliyahsyaafira1234 ',
' [ AKTIF ] 195090307111021:fitriani123 ',
' [ MODAR ] 185030800111009:abdulfattahmanshur ',
' [ MODAR ] 185030800111009:abdulfattah ',
' [ MODAR ] 185030800111009:abdulfattah1234  ',
' [ MODAR ] 185030800111009:fattahmanshur ',
' [ AKTIF ] 193141414111094:herdian123 ',
' [ MODAR ] 185030800111009:fattahmanshur1234 ',
' [ MODAR ] 185030801111008:nidaarub1234 ',
' [ MODAR ] 185030801111008:arubmajida ',
' [ MODAR ] 185030801111008:arubmajida1234 ',
' [ MODAR ] 185030801111008:nidamajida ',
' [ AKTIF ] 165010101111145:manik123 ',
' [ AKTIF ] 165080100111015:mentari123 ',
' [ MODAR ] 165030800111012:yusifaputri ',
' [ MODAR ] 165030800111012:yusifaputri1234 ',
' [ MODAR ] 165030800111012:odinaputri ',
' [ MODAR ] 165030800111012:odinaputri1234 ',
' [ MODAR ] 205030807111011:pahleviauliarahman ',
' [ AKTIF ] 195080400113038:muhammad123 ',
' [ MODAR ] 205030807111011:pahleviaulia ',
' [ MODAR ] 205030807111011:pahleviaulia1234 ',
' [ MODAR ] 205030807111011:auliarahman ',
' [ AKTIF ] 195040100113031:alfina123 ',
' [ MODAR ] 205030807111011:auliarahman1234 ',
' [ MODAR ] 205030807111011:pahlevirahman ',
' [ MODAR ] 205030807111011:pahlevirahman1234 ',
' [ MODAR ] 205030800111017:prasiskatriwahyuni ',
' [ MODAR ] 205030800111017:prasiskatri ',
' [ AKTIF ] 195150601111013:fadwa12345 ',
' [ MODAR ] 205030800111017:prasiskatri1234 ',
' [ MODAR ] 205030800111017:triwahyuni ',
' [ MODAR ] 195030800111039:ramadaalparisi1234 ',
' [ MODAR ] 195030800111039:nabilalparisi ',
' [ MODAR ] 195030800111039:nabilalparisi1234 ',
' [ AKTIF ] 193141914111045:catleya12345 ',
' [ MODAR ] 205030807111026:nabilaputrinugroho ',
' [ MODAR ] 205030807111026:nabilaputri ',
' [ MODAR ] 205030807111026:nabilaputri1234 ',
' [ MODAR ] 205030807111026:putrinugroho ',
' [ MODAR ] 205030807111026:putrinugroho1234 ',
' [ AKTIF ] 195040100113014:serrina123 ',
' [ MODAR ] 205030807111026:nabilanugroho ',
' [ MODAR ] 205030807111026:nabilanugroho1234 ',
' [ MODAR ] 175030801111008:nabilarahmahpujiyanti ',
' [ MODAR ] 175030801111008:nabilarahmah ',
' [ AKTIF ] 185020307141005:Silaban123 ',
' [ MODAR ] 175030801111008:nabilarahmah1234 ',
' [ MODAR ] 175030801111008:rahmahpujiyanti ',
' [ MODAR ] 175030801111008:rahmahpujiyanti1234 ',
' [ MODAR ] 175030801111008:nabilapujiyanti ',
' [ MODAR ] 175030801111008:nabilapujiyanti1234 ',
' [ MODAR ] 205030807111001:apriliasavitri ',
' [ AKTIF ] 165040107113005:moissenes ',
' [ MODAR ] 205030807111001:apriliasavitri1234 ',
' [ MODAR ] 205030807111001:nursavitri ',
' [ MODAR ] 205030807111001:nursavitri1234 ',
' [ AKTIF ] 175160101111010:nafisah123 ',
' [ MODAR ] 195030800111046:nurulhuda1234 ',
]



//' [ AKTIF ] 185080300111030:faizan123
//' [ AKTIF ] 195030107111024:Allisya123',
