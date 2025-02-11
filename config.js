const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uQVV0LLS#k_CGloFP4IyomEO5o22LlbywRPC03gvTm8xxE0WIfMk",
ALIVE_IMG: process.env.ALIVE_IMG ||"https://i.ibb.co/zZ13BVL/9674.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"𝐇𝐄𝐋𝐋𝐎 𝐢 𝐀𝐌 𝐑𝐎𝐖𝐃𝐘 𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓. 𝐂𝐑𝐄𝐀𝐓𝐄 𝐁𝐘 𝐃𝐀𝐑𝐊 𝐒𝐈𝐇𝐈𝐍𝐀...🌝💚 ",
};
