const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "ytcomment",
    alias: ["youtubecomment", "fakecomment"],
    react: '💬',
    desc: "Generate Fake YouTube Comment",
    category: "image",
    filename: __filename
}, async (conn, mek, m, { from, reply, args, sender, pushName }) => {
    try {
        // Help message for command
        const helpMessage = `*🎬 YOUTUBE COMMENT GENERATOR*

Usage: .ytcomment <username>|<comment text>

*Examples:*
.ytcomment WOLF-MD|Amazing video!
.ytcomment User123|WOLF-MD is awesome

*Guidelines:*
- Use format: username|comment
- Username: 3-20 characters
- Comment: 3-100 characters
- Separate with '|' symbol`;

        // Check if text is provided
        if (!args[0]) {
            return await reply(helpMessage);
        }

        // Split input into username and comment
        const parts = args.join(' ').split('|');
        if (parts.length < 2) {
            return await reply(`❌ Invalid format!\n\n${helpMessage}`);
        }

        const username = parts[0].trim();
        const comment = parts.slice(1).join('|').trim();

        // Validate username
        if (username.length < 3 || username.length > 20) {
            return await reply("❌ Username must be between 3-20 characters!");
        }

        // Validate comment
        if (comment.length < 3 || comment.length > 100) {
            return await reply("❌ Comment must be between 3-100 characters!");
        }

        // Send processing message
        const processingMsg = await reply('🖼️ *Generating YouTube Comment...*');

        try {
            // Fetch user's profile picture
            const profilePicUrl = await conn
                .profilePictureUrl(sender, 'image')
                .catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');

            // Alternative APIs for fallback
            const apis = [
                {
                    url: 'https://some-random-api.com/canvas/misc/youtube-comment',
                    params: {
                        avatar: profilePicUrl,
                        comment: comment,
                        username: username
                    }
                },
                {
                    url: 'https://api.popcat.xyz/youtube-comment',
                    params: {
                        image: profilePicUrl,
                        text: comment,
                        username: username
                    }
                }
            ];

            // Try multiple APIs
            let successfulResponse = null;
            for (const api of apis) {
                try {
                    const response = await axios.get(api.url, {
                        params: api.params,
                        responseType: 'arraybuffer',
                        timeout: 10000 // 10 seconds timeout
                    });

                    if (response.data) {
                        successfulResponse = response;
                        break;
                    }
                } catch (apiError) {
                    console.error(`Error with ${api.url}:`, apiError.message);
                    continue;
                }
            }

            // Check if any API worked
            if (!successfulResponse) {
                throw new Error("All comment generation APIs failed");
            }

            // Delete processing message
            try {
                await conn.sendMessage(from, { delete: processingMsg.key });
            } catch {}

            // Send generated comment image
            await conn.sendMessage(from, {
                image: successfulResponse.data,
                caption: '*THANKS FOR COMMENT* 💬',
                quoted: m
            });

            // React with success
            await m.react('✅');

        } catch (apiError) {
            console.error("YouTube Comment API Error:", apiError);
            
            // Delete processing message
            try {
                await conn.sendMessage(from, { delete: processingMsg.key });
            } catch {}

            // Handle API error with detailed message
            await reply(`❌ Failed to generate comment:\n${apiError.message}\n\nPlease try again later.`);
            await m.react('❌');
        }

    } catch (error) {
        console.error("YouTube Comment Command Error:", error);
        await reply(`❌ An unexpected error occurred: ${error.message}`);
        await m.react('❌');
    }
});
