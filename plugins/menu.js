
const {readEnv} = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ʙʟᴀᴄᴋ ʟᴇᴀᴜɢᴇ ᴍᴅ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*│◈  ᴡᴇʙ ꜱɪᴛᴇ : https://website-esx.pages.dev*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • MAIN*
*├ 2 • CONVERT*
*├ 3 • SEARCH*
*├ 4 • DOWNLOAD*
*├ 5 • GROUP*
*├ 6 • OWNER*
*├ 7 • MOVIE*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/3f7249eb429c8211cbba3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                    reply(`
                    

╔════════════════════════╗  
║ 🔧 **𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🔧 ║  
╚════════════════════════╝  

╭─━─━─━〔 ⚡ **Commands** ⚡ 〕━─━─━╮  
┃ ◈ **alive**  
┃ ◈ **about**  
┃ ◈ **menu**  
┃ ◈ **allmenu**  
┃ ◈ **support**  
┃ ◈ **system**  
┃ ◈ **ping**  
┃ ◈ **runtime**
┃ ◈ **jid**
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in MAIN:** 9  

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`);

                        break;
                    case '2':               
                        reply(`
╔════════════════════════╗  
║ 🔄 **𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🔄 ║  
╚════════════════════════╝  

╭─━─━─━〔 ⚡ **Commands** ⚡ 〕━─━─━╮  
┃ ◈ **sticker**  
┃ ◈ **toppt**  
┃ ◈ **img2url**  
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  
📊 **Total Commands in CONVERT:** 1  

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                  
                        break;
                    case '3':               
                        reply(`
╔════════════════════════╗  
║ 🔍 **𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🔍 ║  
╚════════════════════════╝  

╭─━─━─━〔 ⚡ **Commands** ⚡ 〕━─━─━╮  
┃ ◈ **yts**  
┃ ◈ **srepo**
┃ ◈ **githubstalk**  
┃ ◈ **tiktokstalk**
┃ ◈ **image**  
┃ ◈ **npmstalk**
┃ ◈ **tempmail**  
┃ ◈ **checkmail**
┃ ◈ **delmail**
┃ ◈ **gpass**
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in SEARCH:** 10

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                        break;
                    case '4':               
                        reply(`
╔════════════════════════╗  
║ 📥 **𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 📥 ║  
╚════════════════════════╝  

╭─━─━─━〔 ⚡ **Commands** ⚡ 〕━─━─━╮  
┃ ◈ **apk**  
┃ ◈ **twitter**  
┃ ◈ **gdrive**  
┃ ◈ **mediafire**  
┃ ◈ **fb**  
┃ ◈ **ig**    
┃ ◈ **song**  
┃ ◈ **video**   
┃ ◈ **song2**  
┃ ◈ **video2**  
┃ ◈ **tiktok**
┃ ◈ **mega**
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in DOWNLOAD:** 12

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                    
                        break;
                    case '5':               
                        reply(`
╔════════════════════════╗  
║ 👥 **𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👥 ║  
╚════════════════════════╝  

╭─━─━─━〔 ⚡ **Commands** ⚡ 〕━─━─━╮  
┃ ◈ **mute**  
┃ ◈ **unmute**  
┃ ◈ **promote**  
┃ ◈ **demote**  
┃ ◈ **del**  
┃ ◈ **add**  
┃ ◈ **getpic**  
┃ ◈ **setwelcome**  
┃ ◈ **setgoodbye**  
┃ ◈ **admins**  
┃ ◈ **groupdesc**  
┃ ◈ **groupinfo**  
┃ ◈ **gname**  
┃ ◈ **setsubject**  
┃ ◈ **tagall**  
┃ ◈ **requests**  
┃ ◈ **accept**  
┃ ◈ **reject**  
┃ ◈ **hidetag**  
┃ ◈ **kick**  
┃ ◈ **unlock**  
┃ ◈ **lock**
┃ ◈ **gname**  
┃ ◈ **approve**  
┃ ◈ **poll**  
┃ ◈ **getpic**  
┃ ◈ **join**  
┃ ◈ **leave**  
┃ ◈ **invite**  
┃ ◈ **tagadmin**  
┃ ◈ **closetime**  
┃ ◈ **opentime**
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in GROUP:** 32  

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                    break;
                    case '6':               
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👨‍💻 ║  
╚════════════════════════╝  

╭─━─━─━〔 🍿 **Commands** 🍿 〕━─━─━╮  
┃ ◈ **setting**  
┃ ◈ **apply**  
┃ ◈ **group**  
┃ ◈ **shutdown**  
┃ ◈ **setpp**  
┃ ◈ **shutdown**  
┃ ◈ **clearchats**  
┃ ◈ **block**
┃ ◈ **unblock**
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in MOVIE:** 9 

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                       
                        
                    
                        
                        break;
                    case '7':               
                        reply(`
╔════════════════════════╗  
║ 🎬 **𝗠𝗢𝗩𝗜𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🎬 ║  
╚════════════════════════╝  

╭─━─━─━〔 🍿 **Commands** 🍿 〕━─━─━╮  
┃ ◈ **slsub**  
┃ ◈ **imdb**  
┃ ◈ **mkv**  
┃ ◈ **upmv**  
┃ ◈ **upzipfile**  
┃ ◈ **uploadmoviem**  
┃ ◈ **uploadme**  
┃ ◈ **uploadmovie**  
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in MOVIE:** 8 

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`)


                        

                    break;
                    default:
                    
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

//           ==all menu command ==

cmd({
    pattern: "allmenu",
    desc: "All commands.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: '',
movie:'',
news:''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = ` 
╔═══════════════════════════╗  
║ 🌟 **𝗕𝗟𝗔𝗖𝗞 𝗟𝗘𝗔𝗚𝗨𝗘 𝗠𝗗** 🌟   ║  
║  *The Ultimate Experience*  ║  
╚═══════════════════════════╝  

👋 **Hello, ${pushname}!**  
✨ **Welcome to the world of possibilities!**  

━━━━━━━━━━━━━━━━━━━━━━━  
🔥 **𝗕𝗢𝗧 𝗜𝗡𝗙𝗢** 🔥  
━━━━━━━━━━━━━━━━━━━━━━━  
🔧 **Run Time:** ${runtime(process.uptime())}  
👤 **Owner:** Anila Lochana  
📞 **Contact:** 94758315442  
🌐 **Website:** redfox-inc.22web.org 

━━━━━━━━━━━━━━━━━━━━━━━  
📂 **𝗔𝗟𝗟 𝗠𝗘𝗡𝗨𝗦**  
━━━━━━━━━━━━━━━━━━━━━━━  

📥 **Download Menu**  
╔═════════════════════╗  
${menu.download}  
╚═════════════════════╝  

🔧 **Main Menu**  
╔═════════════════════╗  
${menu.main}  
╚═════════════════════╝  

🔄 **Convert Tools**  
╔═════════════════════╗  
${menu.convert}  
╚═════════════════════╝  

🔍 **Search Features**  
╔═════════════════════╗  
${menu.search}  
╚═════════════════════╝  

👥 **Group Management**  
╔═════════════════════╗  
${menu.group}  
╚═════════════════════╝  

🔒 **Owner Menu**  
╔═════════════════════╗  
${menu.owner}  
╚═════════════════════╝  

🎬 **Movie Updates**  
╔═════════════════════╗  
${menu.movie}  
╚═════════════════════╝  


━━━━━━━━━━━━━━━━━━━━━━━  
💡 **POWERED BY ANILA LOCHANA**  
━━━━━━━━━━━━━━━━━━━━━━━
`

return await conn.sendMessage(from,{image: {url:`https://telegra.ph/file/3f7249eb429c8211cbba3.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
