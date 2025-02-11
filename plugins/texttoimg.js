const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../DATABASE/functions')
var desct = "It Convert Given Text To AI Image."
var imgmsg = "*Example: .imagine woman,hair cut collor red,full body,bokeh*"
var cantf = "*Server Is Busy. Try Again Later.!*"
let wm = `> *𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐫𝐨𝐰𝐝𝐲 𝐦𝐝*`
cmd({
    pattern: "texttoimgv1",
    alias: ["texttoimagev1","toimagev1","t2iv1"],
    react: '🤖',
    desc: desct,
    category: "ai",
    use: '.imagine  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v3/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "prodia",
    alias: ["texttoimage4","toimage4","t2i4"],
    react: '🤖',
    desc: desct,
    category: "ai",
    use: '.prodia  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/prodia/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "texttoimg2",
    alias: ["texttoimage2","toimage2","t2i2"],
    react: '🤖',
    desc: desct,
    category: "ai",
    use: '.texttoimg2  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v2/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "texttoimg3",
    alias: ["texttoimage3","toimage3","t2i3"],
    react: '🤖',
    desc: desct,
    category: "ai",
    use: '.texttoimg3  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v1/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "aemtv1",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v1/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv2",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v2/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv3",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v3/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv4",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v4/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv5",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v5/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv6",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v6/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})
//=====================================dalle e========================
cmd({
    pattern: "aemtv7",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/dalle?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})


//================================================================================================================================================

