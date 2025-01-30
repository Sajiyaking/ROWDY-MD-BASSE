//03.All reddy ai anime
const { cmd } = require('../command');
const fetch = require('node-fetch');  
const fs = require('fs');
const config = require('../config')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "imagine1",
    react: '🪩',
    category: "imagine",
    desc: desct,
    dontAddCommandList: true,
    use: '.prodia  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Enter word ex .ailogo3 car")
let res = await fetchJson('https://hercai.onrender.com/prodia/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: 'text to your name'}, { quoted: mek })
} catch (e) {
reply("*I Can't Create That Logo* 😓")
l(e)
}
});

> *_Created by_* 👨🏼‍💻 :- *_Sl Nethu Max Yt_*
