const { cmd } = require('../command');
const Hiru = require('hirunews-scrap');
const Esana = require('@sl-code-lords/esana-news');
const { fetchJson } = require('../DATABASE/functions')
const axios = require('axios');
const config = require('../config');

let activeGroups = {};
let lastNewsTitles = {
    hiru: {},
    sirasa: {},
    derana: {}
};

// Function to get the latest news from Hiru
async function getHiruNews() {
    try {
        const response = await axios.get('https://dark-yasiya-news-apis.vercel.app/api/hiru');
        if (response.data.status) {
            const news = response.data.result;
            return {
                title: news.title,
                content: news.desc,
                date: news.date,
                url: news.url,
                image: news.image
            };
        }
        return null;
    } catch (err) {
        console.error(`Error fetching Hiru News: ${err.message}`);
        return null;
    }
}

// Function to get the latest news from Sirasa
async function getSirasaNews() {
    try {
        const response = await axios.get('https://dark-yasiya-news-apis.vercel.app/api/sirasa');
        if (response.data.status) {
            const news = response.data.result;
            return {
                title: news.title,
                content: news.desc,
                date: news.date,
                url: news.url,
                image: news.image
            };
        }
        return null;
    } catch (err) {
        console.error(`Error fetching Sirasa News: ${err.message}`);
        return null;
    }
}

// Function to get the latest news from Derana
async function getDeranaNews() {
    try {
        const response = await axios.get('https://dark-yasiya-news-apis.vercel.app/api/derana');
        if (response.data.status) {
            const news = response.data.result;
            return {
                title: news.title,
                content: news.desc,
                date: news.date,
                url: news.url,
                image: news.image
            };
        }
        return null;
    } catch (err) {
        console.error(`Error fetching Derana News: ${err.message}`);
        return null;
    }
}

// Function to send news to a group
async function sendNews(conn, groupId, news, source) {
    if (news) {
        // Check if the title is different before sending
        if (lastNewsTitles[source][groupId] !== news.title) {
            lastNewsTitles[source][groupId] = news.title; // Update the last news title sent to the group
            
            // Constructing the message
            let message = `📰 *${source} News*\n\n*Title:* ${news.title}\n\n*Description:* ${news.content}\n\n*Published On:* ${news.date}`;
            if (news.url) message += `\n\n*Read more:* ${news.url}`;
            message += `\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`; // Add caption

            // Check if there is an image to send
            if (news.image) {
                await conn.sendMessage(groupId, {
                    image: { url: news.image },
                    caption: message
                });
            } else {
                await conn.sendMessage(groupId, { text: message });
            }
        }
    }
}

// Function to check and post the latest news
async function checkAndPostNews(conn, groupId) {
    const hiruNews = await getHiruNews();
    const sirasaNews = await getSirasaNews();
    const deranaNews = await getDeranaNews();

    // Send Hiru News
    await sendNews(conn, groupId, hiruNews, 'hiru');

    // Send Sirasa News
    await sendNews(conn, groupId, sirasaNews, 'sirasa');

    // Send Derana News
    await sendNews(conn, groupId, deranaNews, 'derana');
}

// Command to activate 24/7 news service in a group
cmd({
    pattern: "startnews",
    desc: "Enable Sri Lankan news updates in this group",
    isGroup: true,
    react: "📰",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, participants }) => {
    try {
        const isAdmin = participants.some(p => p.id === mek.sender && p.admin);
        const isBotOwner = mek.sender === conn.user.jid;

        if (isAdmin || isBotOwner) {
            if (!activeGroups[from]) {
                activeGroups[from] = true;
                await conn.sendMessage(from, { text: "📰 24/7 News Activated." });

                // Start the interval if it's not already active
                if (!activeGroups['interval']) {
                    activeGroups['interval'] = setInterval(async () => {
                        for (const groupId in activeGroups) {
                            if (activeGroups[groupId] && groupId !== 'interval') {
                                await checkAndPostNews(conn, groupId);
                            }
                        }
                    }, 60000); // Run every 60 seconds
                }
            } else {
                await conn.sendMessage(from, { text: "📰 24/7 News Already Activated." });
            }
        } else {
            await conn.sendMessage(from, { text: "🚫 This command can only be used by group admins or the bot owner." });
        }
    } catch (e) {
        console.error(`Error in startnews command: ${e.message}`);
        await conn.sendMessage(from, { text: "Failed to activate the news service." });
    }
});

// Command to deactivate the 24/7 news service
cmd({
    pattern: "stopnews",
    desc: "Disable Sri Lankan news updates in this group",
    isGroup: true,
    react: "🛑",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, participants }) => {
    try {
        const isAdmin = participants.some(p => p.id === mek.sender && p.admin);
        const isBotOwner = mek.sender === conn.user.jid;

        if (isAdmin || isBotOwner) {
            if (activeGroups[from]) {
                delete activeGroups[from];
                await conn.sendMessage(from, { text: "🛑 24/7 News Deactivated." });

                // Stop the interval if no groups are active
                if (Object.keys(activeGroups).length === 1 && activeGroups['interval']) {
                    clearInterval(activeGroups['interval']);
                    delete activeGroups['interval'];
                }
            } else {
                await conn.sendMessage(from, { text: "🛑 24/7 News is not active in this group." });
            }
        } else {
            await conn.sendMessage(from, { text: "🚫 This command can only be used by group admins or the bot owner." });
        }
    } catch (e) {
        console.error(`Error in stopnews command: ${e.message}`);
        await conn.sendMessage(from, { text: "Failed to deactivate the news service." });
    }
});