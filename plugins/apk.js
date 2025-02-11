const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': 'apk',
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x56da32, _0x48f780, _0x3cbff5, {
  from: _0xbd3b9f,
  quoted: _0x4b0680,
  body: _0x47a4ce,
  isCmd: _0x29a752,
  command: _0x2a8424,
  args: _0x250a28,
  q: _0x54cc58,
  isGroup: _0x16cbe0,
  sender: _0x17550c,
  senderNumber: _0x556524,
  botNumber2: _0x16c4b8,
  botNumber: _0xd53bda,
  pushname: _0x294a90,
  isMe: _0x398266,
  isOwner: _0x42c853,
  groupMetadata: _0x45e657,
  groupName: _0x446505,
  participants: _0x4fde9a,
  groupAdmins: _0x3535c9,
  isBotAdmins: _0x14db6c,
  isAdmins: _0x459724,
  reply: _0x31b608
}) => {
  try {
    await _0x3cbff5.react('⬇');
    const _0x34981b = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x54cc58 + '/limit=1';
    const _0xefc061 = await axios.get(_0x34981b);
    const _0x35ebe9 = _0xefc061.data;
    let _0x9dad20 = _0x35ebe9.datalist.list[0x0].size % 0xf4240;
    let _0xd49d48 = '.' + _0x9dad20;
    let _0x1d38a3 = _0x35ebe9.datalist.list[0x0].size / 0xf4240;
    let _0x5a853a = _0x1d38a3 - _0xd49d48;
    let _0x408ceb = "\n*⚬ɴᴇxᴜs-xᴅ-ᴠ2-ᴀᴘᴋ⚬*  \n*🏷️ Nᴀᴍᴇ :* " + _0x35ebe9.datalist.list[0x0].name + "\n\n*📦 Sɪᴢᴇ :* " + _0x5a853a + "MB\n\n*🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x35ebe9.datalist.list[0x0]['package'] + "\n\n*📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x35ebe9.datalist.list[0x0].updated + "\n\n*👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x35ebe9.datalist.list[0x0].developer.name + "\n\n > © 🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ ✻\n";
    await _0x3cbff5.react('⬆');
    await _0x56da32.sendMessage(_0xbd3b9f, {
      'document': {
        'url': _0x35ebe9.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x35ebe9.datalist.list[0x0].name,
      'mimetype': "application/vnd.android.package-archive",
      'caption': _0x408ceb
    }, {
      'quoted': _0x48f780
    });
    await _0x3cbff5.react('✅');
  } catch (_0x26a136) {
    console.log(_0x26a136);
    _0x31b608('' + _0x26a136);
  }
});
