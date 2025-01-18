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

   ⛕👾⃟🩵𝐑𝐎𝐖𝐃𝐘 𝐌𝐃 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓👾⃟🩵⛕

      ╠╶ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
      ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ╶ ╣
         
        ▰▰▰▰▰▰▰▰▰▰               
 ┏━━━━━❮📝 𝗗𝗘𝗧𝗘𝗟𝗘𝗦 📝❯
 ┃     
*┃⛊ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*┃⛊ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*┃⛊ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*┃⛊ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*┗━━━━━━━━━━*

 ┏━━━❮ 📜𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧 📜 ❯━━
 ┃
 ┃◉ *1 - ➾* ❮❮ 𝐌𝐀𝐈𝐍 𝐂𝐌𝐃 ❯❯
 ┃◉ *2 - ➾* ❮❮ 𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐌𝐃 ❯❯
 ┃◉ *3 - ➾* ❮❮ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐌𝐃 ❯❯
 ┃◉ *4 - ➾* ❮❮ 𝐆𝐑𝐎𝐔𝐏 𝐂𝐌𝐃 ❯❯
 ┃◉ *5 - ➾*❮❮ 𝐎𝐖𝐍𝐄𝐑 𝐂𝐌𝐃 ❯❯
 ┃◉ *7 - ➾* ❮❮ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐌𝐃 ❯❯
 ┃◉ *8 - ➾*❮❮ 𝐀𝐈 𝐂𝐌𝐃 ❯❯
 ┃◉ *9 - ➾* ❮❮ 𝐋𝐎𝐆𝐎 𝐂𝐌𝐃 ❯❯
 ┃◉ *10 - ➾* ❮❮ 𝐀𝐍𝐈𝐌𝐄 𝐂𝐌𝐃 ❯❯
 ┗━━━━━━━━━━━━━

> *ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴅᴀᴋꜱʜɪɴᴀ.....*
> *ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ* : https://github.com/Sajiyaking/ROWDY-MD-BASSE

_* ⛊ Reply with the Number you want to select*_

> *𝐃𝐀𝐊𝐒𝐇𝐈𝐍𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗*`;

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
💡 **POWERED BY DARK SIHINA**  
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
💡 **POWERED BY DARK SIHINA**  
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
💡 **POWERED BY DARK SIHINA**  
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
💡 **POWERED BY DARK SIHINA**  
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
💡 **POWERED BY DARK SIHINA**  
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
