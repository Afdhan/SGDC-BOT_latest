const axios = require('axios')
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const cheerio = require('cheerio')
const fs = require("fs");
const FormData = require('form-data')

let handler = async (m, { conn, args, usedPrefix }) => {
    const content = JSON.stringify(m.message)
    const type = Object.keys(m.message)[0]
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('image/webp')
    const mediaData = type === "extendedTextMessage" ? JSON.parse(JSON.stringify(m).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : m

    const filename = getRandom()
    const savedFile = await conn.downloadAndSaveMediaMessage(mediaData, `./tmp/${filename}`)
   await m.reply(global.wait)
    if (isQuotedSticker) {
        await webpGifFile(savedFile)
            .then(async (rest) => {
                await axios({
                    method: "GET",
                    url: rest.result,
                    responseType: "stream",
                }).then(({ data }) => {
                    const saved = data.pipe(
                        fs.createWriteStream(`./tmp/${filename}-hasil.gif`)
                    )
                    saved.on("finish", () => {
                        conn.sendMessage(
                            m.chat,
                            fs.readFileSync(`./tmp/${filename}-hasil.gif`),
                            MessageType.video, {
                            mimetype: Mimetype.gif,
                            caption: `*SGDC-BOT*`,
                            quoted: m,
                        }
                        )
                        if (fs.existsSync(savedFile)) fs.unlinkSync(savedFile)
                        if (fs.existsSync(`./tmp/${filename}-hasil.gif`)) fs.unlinkSync(`./tmp/${filename}-hasil.gif`)
                    })
                })
            })
            .catch((e) => {
                console.log(e)
                m.reply(global.error)
                if (fs.existsSync(savedFile)) fs.unlinkSync(savedFile)
            })
    } else throw `kirim stiker gif kemudian reply dengan caption ${usedPrefix}togif`
}

handler.command = /^(togif)$/i
handler.premium = true
module.exports = handler

const getRandom = () => {
    return `${Math.floor(Math.random() * 10000)}`
}

function webpGifFile(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await axios({
            method: 'post',
            url: 'https://ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const datagot = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', datagot.file)
            bodyFormThen.append('token', datagot.token)
            bodyFormThen.append('convert', datagot.convert)
            await axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + datagot.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: "MUHAMMAD AFDHAN",
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}
// by M AFDHAN
