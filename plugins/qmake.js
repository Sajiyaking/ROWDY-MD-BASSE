const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../DATABASE/functions')

cmd({
  pattern: "qmake",
  desc: "q maker chat.",
  category: "convert",
  react: "🌀",
  filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!body) throw `*Give a text to convert*` // Access text using body
try {
  conn.sendFile(
    m.chat,
    await toDataURL(body.slice(0, 2048), { scale: 8 }),
    'qrcode.png',
    'Here u go',
    m
  )
} catch (e) {
  console.log(e)
  reply(`${e}`)
}
})
