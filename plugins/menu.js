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

*╭─「 𝘙𝘖𝘞𝘋𝘠 𝘔𝘋 𝘔𝘌𝘕𝘜 𝘓𝘐𝘚𝘛 」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • MAIN*
*├ 2 • SEARCH*
*├ 3 • DOWNLOAD*
*├ 5 • GROUP*
*├ 6 • OWNER*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙍𝙆 𝙎𝙄𝙃𝙄𝙉𝘼*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/XZdtG0d/6254.jpg"}, caption: desc }, { quoted: mek });

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
💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙍𝙆 𝙎𝙄𝙃𝙄𝙉𝘼**  
━━━━━━━━━━━━━━━━━━━━━━━
`);

                        break;
                    case '2':               
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
💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙍𝙆 𝙎𝙄𝙃𝙄𝙉𝘼**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                        break;
                    case '3':               
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
💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙍𝙆 𝙎𝙄𝙃𝙄𝙉𝘼**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                    
                        break;
                    case '4':               
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
💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙍𝙆 𝙎𝙄𝙃𝙄𝙉𝘼**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                    break;
                    case '5':               
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👨‍💻 ║  
╚════════════════════════╝  

╭─━─━─━〔 🍿 **Commands** 🍿 〕━─━─━╮ 
┃ ◈ **shutdown**  
┃ ◈ **setpp**  
┃ ◈ **shutdown**  
┃ ◈ **clearchats**  
┃ ◈ **block**
┃ ◈ **unblock**
╰─━─━─━─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in MOVIE:** 9 

━━━━━━━━━━━━━━━━━━━━━━━  
💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙍𝙆 𝙎𝙄𝙃𝙄𝙉𝘼**  
━━━━━━━━━━━━━━━━━━━━━━━
`);
                       
                        
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
