const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "phub",
    alias: ["pornhub"],
    react: "🫣",
    desc: "Search and download videos from Pornhub.",
    category: "nsfw",
    use: ".phub <query>",
    filename: __filename,
}, async (conn, m, mek, { from, q, reply, prefix }) => {
    try {
        if (!q) return await reply("🚩 *Please provide a search term!*");

        const searchResults = await axios.get(`https://pornhub-apis-zazie.vercel.app/api/search?q=${q}`);
        const videos = searchResults.data?.data || [];
        if (videos.length === 0) {
            return await reply("🚩 *No results found! Please try another query.*");
        }

        const buttons = videos.map((v, i) => ({
            buttonId: `${prefix}viddetails ${v.link}`,
            buttonText: { displayText: `🎥 ${v.title}` },
            type: 1
        }));

        await conn.sendButton(from, `乂 *PORNHUB SEARCH RESULTS* 乂\n\nSelect a video from the list below:`, buttons, mek);
    } catch (error) {
        console.error('Error in command:', error);
        await reply("🚩 *An error occurred while processing your request!*");
    }
});

cmd({
    pattern: "viddetails",
    dontAddCommandList: true,
    filename: __filename,
}, async (conn, m, mek, { from, args, reply, prefix }) => {
    try {
        const videoLink = args[0];
        if (!videoLink) return await reply("🚩 *Video link is required!*");

        const videoDetails = await axios.get(`https://api-site-kappa.vercel.app/api/phdl?q=${videoLink}`);
        const videoData = videoDetails.data;
        const qualities = videoData?.dl_links || [];

        if (qualities.length === 0) {
            return await reply("🚩 *No qualities available for download!*");
        }

        const buttons = qualities.map((q, i) => ({
            buttonId: `${prefix}viddl ${q.download_url}`,
            buttonText: { displayText: `⬇️ Quality: ${q.quality}` },
            type: 1
        }));

        await conn.sendButton(from, `乂 *VIDEO DETAILS* 乂\n\n*Title:* ${videoData.video_title}\n*Uploader:* ${videoData.video_uploader}\n*Uploaded on:* ${videoData.video_upload_date}\n\nSelect a quality to download:`, buttons, mek);
    } catch (error) {
        console.error('Error in command:', error);
        await reply("🚩 *An error occurred while processing your request!*");
    }
});

cmd({
    pattern: "viddl",
    dontAddCommandList: true,
    filename: __filename,
}, async (conn, m, mek, { from, args, reply }) => {
    try {
        const downloadUrl = args[0];
        if (!downloadUrl) return await reply("🚩 *Download link is required!*");

        await conn.sendMessage(from, { text: "⬇️ *Downloading your video...*" }, { quoted: mek });

        await conn.sendMessage(from, {
            document: { url: downloadUrl },
            mimetype: 'video/mp4',
            fileName: `Video.mp4`,
            caption: `> Here's your video!`
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: "✔️", key: mek.key } });
    } catch (error) {
        console.error('Error in command:', error);
        await reply("🚩 *An error occurred while downloading your video!*");
    }
});
