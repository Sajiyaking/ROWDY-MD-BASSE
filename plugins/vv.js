const {cmd , commands} = require('../command')

cmd(
  {
    pattern: "vv",
    desc: "To download view once",
    react: "",
    category: "owner",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {from,users , quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{
      // Ensure the quoted message exists
      let quotedMessage = m.quoted ? m.quoted : m; // If quoted exists, use that; otherwise, use the original message.
      let mime = quotedMessage.msg?.mimetype || ""; // Get MIME type from the quoted message
      
      if (!mime) {
        throw " Please reply to an image, video, or audio.";
      }

      // Download the quoted media
      let media = await quotedMessage.download();
      if (!media) throw "Failed to download the media. Please try again.";

      // Handle different media types (image, video, audio)
      const fs = require("fs");
      const path = require("path");
      const os = require("os");

      let mediaResponse = {};
      if (mime.startsWith("image/")) {
        let tempFilePath = path.join(os.tmpdir(), "🤍.png"); // Save as image
        await fs.writeFileSync(tempFilePath, media);
        mediaResponse = { image: { url: tempFilePath } };
      } else if (mime.startsWith("video/")) {
        let tempFilePath = path.join(os.tmpdir(), "🤍.mp4"); // Save as video
        await fs.writeFileSync(tempFilePath, media);
        mediaResponse = { video: { url: tempFilePath } };
      } else if (mime.startsWith("audio/")) {
        let tempFilePath = path.join(os.tmpdir(), "🤍.mp3"); // Save as audio
        await fs.writeFileSync(tempFilePath, media);
        mediaResponse = { audio: { url: tempFilePath } };
      } else {
        return reply('```This is not a supported Media Message!```');
      }

      // Send the media back to the user
      return conn.sendMessage(from, mediaResponse);
      
    } catch (e) {
      console.log(e);
      reply(`Error: ${e.message || e}`);
    }
  }
);
