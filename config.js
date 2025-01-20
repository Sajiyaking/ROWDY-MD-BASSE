const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG ||"https://i.ibb.co/XZdtG0d/6254.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"𝘩𝘦𝘭𝘭𝘰 𝘪 𝘢𝘮 𝘳𝘰𝘸𝘥𝘺 𝘮𝘥 𝘸𝘩𝘢𝘵𝘴 𝘢𝘱𝘱 𝘣𝘰𝘵. 𝘤𝘳𝘦𝘢𝘵𝘦 𝘣𝘺 𝘥𝘢𝘳𝘬 𝘴𝘪𝘩𝘪𝘯𝘢.",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
STATUS_READ_TEXT: process.env.STATUS_READ_TEXT || "*STATUS SEEN BY CODE HELPER REAL DEXTER",
MODE: process.env.MODE || "inbox",
};
