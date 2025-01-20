const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG ||"https://telegra.ph/file/3f7249eb429c8211cbba3.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"hello i am anila lochana",
};
