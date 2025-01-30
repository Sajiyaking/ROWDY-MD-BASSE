const axios = require('axios');
const cheerio = require('cheerio');
const { cmd } = require('../command');
const fetch = require('node-fetch');
// Command handler for searching cartoons
cmd({
    pattern: "ginisisila",
    react: '📑',
    category: "download",
    desc: "Scrape cartoon episodes",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        if (!q) return await reply('*Please provide a search query! (e.g., Garfield)*');

        // Construct the search URL
        const searchUrl = `https://ginisisilacartoon.net/search.php?q=${encodeURIComponent(q)}`;
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        let episodes = [];

        // Scrape episode details
        $("div.inner-video-cell").each((index, element) => {
            const title = $(element).find("div.video-title > a").attr("title");
            const postedTime = $(element).find("div.posted-time").text().trim();
            const episodeLink = $(element).find("div.video-title > a").attr("href");
            const imageUrl = $(element).find("div.inner-video-thumb-wrapper img").attr("src");

            if (title && episodeLink) {
                episodes.push({
                    title,
                    postedTime,
                    episodeLink: `https://ginisisilacartoon.net/${episodeLink}`,
                    imageUrl: imageUrl
                });
            }
        });

        if (episodes.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        // Prepare the list of episodes
        let info = `*✘~✘~✘𝙶𝙸𝙽𝙸𝚂𝙸𝚂𝙸𝙻𝙰 𝚂𝙴𝙰𝚁𝙲𝙷✘~✘~✘*\n
*🔍 Search Results For:* ${q}\n▬▬▬▬▬▬▬▬▬▬▬\n🎞️ ginisisilacartoon.net\n`;
        episodes.forEach((ep, index) => {
            info += `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n*${index + 1}.* ${ep.title}\n🗓️ Posted: ${ep.postedTime}\n🔗 Link: ${ep.episodeLink}\n\n━━━━━━━━━━━━━━━━━━━`;
        });

        // Send the episode list message
        const sentMsg = await conn.sendMessage(from,{image:{url: `https://i.imgur.com/J88fd9I.jpeg`},caption:info},{quoted:mek});
        const messageID = sentMsg.key.id;

        // Reaction after sending the list
        await conn.sendMessage(from, { react: { text: '📑', key: sentMsg.key } });

        // Listen for user's selection (Episode Number)
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;

            // Check if the message is a reply to the list of episodes
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;
            if (isReplyToSentMsg) {
                let [selectedNumber, jid] = messageType.split(/\s*\|\s*/);
                const selectedEpIndex = parseInt(selectedNumber.trim()) - 1;

                if (selectedEpIndex >= 0 && selectedEpIndex < episodes.length) {
                    const selectedEpisode = episodes[selectedEpIndex];

                     // Send the options (1 - Episode details, 2 - Episode document)
                    const optionsMsg = `*You selected:* ${selectedEpisode.title}\n\n1️⃣ *Get Details*\n2️⃣ *Get Movie/Ep Document*\n\n☘ Please reply with your choice..`;

                    const optMsg = await conn.sendMessage(from, {
                        text: optionsMsg,
                        contextInfo: {
                            externalAdReply: {
                                title: 'GiniSisilaCartoon For Latest Sinhala Kiddies Entertainment, LakvisionCartoons',
                                body: 'Watch most of the sinhala dubbed cartoons and children television program online for free. View all your favorite cartoons and enjoy.',
                                thumbnailUrl: "https://i.imgur.com/J88fd9I.jpeg", // Use the URL directly here
                                sourceUrl: 'https://GinisisilaCartoon.net',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: mek });
                    const optionsMessageID = optMsg.key.id;

                    // Listen for user's choice
                    conn.ev.on('messages.upsert', async (optionUpdate) => {
                        const mekOpt = optionUpdate.messages[0];
                        if (!mekOpt.message) return;
                        const optMessageType = mekOpt.message.conversation || mekOpt.message.extendedTextMessage?.text;
                        const fromOpt = mekOpt.key.remoteJid;

                        // Check if the message is a reply to the options message
                        const isReplyToOptionsMsg = mekOpt.message.extendedTextMessage && mekOpt.message.extendedTextMessage.contextInfo.stanzaId === optionsMessageID;
                        if (isReplyToOptionsMsg) {
                            let [optSelected, targetJid] = optMessageType.split(/\s*\|\s*/);

                            // Default to the current chat if no JID is provided
                            if (!targetJid || (!targetJid.endsWith("@s.whatsapp.net") && !targetJid.endsWith("@g.us"))) {
                                targetJid = fromOpt;
                            }

                            if (optSelected.trim() === "1") {
                                //react
                                await conn.sendMessage(fromOpt, { react: { text: '🔄', key: mekOpt.key } });
                                // Send Episode Details
                                const epInfo = `*🪄 Name:* ${selectedEpisode.title}\n⏳ *Date:* ${selectedEpisode.postedTime}\n🔗 *Link:* ${selectedEpisode.episodeLink}`;
                                await conn.sendMessage(targetJid, {
                                    image: { url: selectedEpisode.imageUrl },
                                    caption: epInfo
                                });

                                await conn.sendMessage(fromOpt, { react: { text: '✔️', key: mekOpt.key } });
                            } else if (optSelected.trim() === "2") {
                                // React for download starting
                                await conn.sendMessage(fromOpt, { react: { text: '⬇️', key: mekOpt.key } });

                                // Fetch the episode page to extract the video link (iframe src)
                                const episodePageResponse = await axios.get(selectedEpisode.episodeLink);
                                const $ = cheerio.load(episodePageResponse.data);

                                const iframeSrc = $('div#player-holder iframe').attr('src');
                                if (!iframeSrc) return await reply("No downloadable link found.");

                                // Call external API to get the download link using iframeSrc
                                const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${iframeSrc}&apikey=mnp3grlZ`;

                                try {
                                    const downloadResponse = await axios.get(apiUrl);
                                    const downloadUrl = downloadResponse.data.result.downloadUrl;

                                    if (downloadUrl) {
                                        // React for upload starting
                                        await conn.sendMessage(fromOpt, { react: { text: '⬆️', key: mekOpt.key } });

                                        // Send the document
                                        const docMsg = await conn.sendMessage(targetJid, {
                                            document: { url: downloadUrl },
                                            mimetype: "video/mp4",
                                            fileName: `NBTxMADHUSITH | ${selectedEpisode.title}.mp4`,
                                            jpegThumbnail: await (await fetch(selectedEpisode.imageUrl)).buffer(),,
                                            caption: `${selectedEpisode.title} |  Powered By NBTxMADHUSITH\n\n> ＱＵＥＥＮ-ＺＡＺＩＥ ＭＤ-ｖ3`
                                        });

                                        // React after successful upload
                                        await conn.sendMessage(fromOpt, { react: { text: '✔️', key: mekOpt.key } });

                                    } else {
                                        await reply('Failed to retrieve the download link for this episode.');
                                    }
                                } catch (error) {
                                    console.error('Error fetching the download link:', error);
                                    await reply('An error occurred while trying to fetch the download link.');
                                }
                            } else {
                                await reply("Invalid option. Please select either '1' or '2'.");
                            }
                        }
                    });
                } else {
                    await reply(`Invalid episode number. Please select a number from the list.`);
                }
            }
        });
    } catch (e) {
        reply('*Error occurred while scraping!*');
        console.error(e);
    }
});
