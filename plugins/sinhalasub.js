 
const axios = require('axios');
const mime = require('mime-types');  // Make sure to install mime-types package
const cheerio = require('cheerio');
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { File } = require('megajs');
const config = require('../config')
const { sinhalaSub } = require("mrnima-moviedl")
const {
  cmd,
  commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')



	
cmd({
    pattern: "sinhalasub1",	
    react: '🔎',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{

 if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
	const url = `https://sinhalasub.lk/?s=${q}`
     const response = await axios.get(url);
    //if (response.status === 200) {
    const $ = cheerio.load(response.data);
    const data = $(".search-page .result-item article")
      .map((index, element) => ({
        No: index + 1,
        Title: $(element).find(".details .title a").text().trim(),
        Desc: $(element).find('.details .contenido p').text().trim(),
        Img:  $(element).find('.image img').attr("src"),
        Type: $(element).find('.image span').text().trim(),
        Link: $(element).find(".details .title a").attr("href"),
        Year: $(element).find('.details span .rating').text().trim(),
        Rating: $(element).find('.details span').text().trim(),

               
      }))/*
      .get();

    res.json(data);
	*/
        if (data.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      let textw = `🔎 𝗧.𝗖 𝗠𝗢𝗜𝗩𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 \n\n`;	
for (var i = 0; i < data.length; i++) {
  textw +=`*⛓️ No:* ${data[i].No}\n`
  textw +=`*📃 Title:* ${data[i].Title}\n`	
  textw +=`*📚 CatName:* ${data[i].Type}\n`
  textw +=`*💫 Rating:* ${data[i].Rating}\n`
  textw +=`*📅 Date:* ${data[i].Year}\n`
  textw +=`*📎 Link:* ${data[i].Link}\n\n--------------------------------------------\n\n
`
} 
        
return await conn.sendMessage(config.JID, { image: { url:data[0].Img } , caption: textw } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       

		      
cmd({
    pattern: "sinhalasub",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
	const url = `https://sinhalasub.lk/?s=${q}`
     const response = await axios.get(url);
    //if (response.status === 200) {
    const $ = cheerio.load(response.data);
    const data = $(".search-page .result-item article")
      .map((index, element) => ({
        No: index + 1,
        Title: $(element).find(".details .title a").text().trim(),
        Desc: $(element).find('.details .contenido p').text().trim(),
        Img:  $(element).find('.image img').attr("src"),
        Type: $(element).find('.image span').text().trim(),
        Link: $(element).find(".details .title a").attr("href"),
        Year: $(element).find('.details span .rating').text().trim(),
        Rating: $(element).find('.details span').text().trim(),

               
      }))

        if (data.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      	var rows = [];  
for (var i = 0; i < data.length; i++) {
	rows.push({
    
              header: data[i].Title,
              title: data[i].Type,
              description: data[i].Year,
              id: `.subin ${data[i].Link}`
            
          });
        }
          
        let buttons = [{
          name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Download Moive 📥',
                        sections: [{
                            title: 'Search By sinhalasub',
                            highlight_label: 'T.C MOVIE-DL',
                            rows: rows
                    }]
               }),
          }
      ]
        const info = `⏳ Search A Movie Name: ${q}
📲 Search top 10 Moive\n

⛊ *චිත්‍රපටයක් හෝ චිත්‍රපටයක් යනු කතන්දර කීමට හෝ මිනිසුන්ට යමක් ඉගැන්වීමට රූප සහ ශබ්ද භාවිතා කරන දෘශ්‍ය කලාවකි.*

⛊ *A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something.*`
        let opts = {
                image: `https://github.com/kushansewmina1234/DARKSHAN-DATA/blob/main/media/image/IMG-20240907-WA0009.jpg?raw=true`,
                header: '🎬━_*T.C SINHALASUB DL*_━🎬',
                footer: 'MOVIE DOWNLOADER BY TC',
                body: info 

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
            }
    })

cmd({
    pattern: "subin",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
    async ( conn, mek, m, { reply, q, isDev, l, prefix, from }) => {
	 if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')   
	    try {
		    if (!q) return await reply("please give me text !..")
                    const response = await axios.get(q);
		    const $x = cheerio.load(response.data);
		    const newsArticle = $x(".sheader").first();
                    const newsHeadline = newsArticle.find(".data .head h1").text();
                    const newsDate = newsArticle.find(".extra .tagline").text().trim();
                    const newsTime = newsArticle.find(".poster img").attr("src");
                    const date = newsArticle.find(".extra .date").text().trim();
                    const duration = newsArticle.find(".extra .runtime").text().trim();
                    const infoMovie = $x("#info").first();
                    const desc = infoMovie.find(".wp-content p").text().trim();
                    const rat = infoMovie.find("#repimdb strong").text().trim();
                    const img = infoMovie.find("#dt_galery .owl-item a").attr("src");
      
		    let download_links = [];
    $x("#download > div > div > table > tbody > tr").each((c, d) => {
        download_links.push({
            quality: $x(d).find("td > strong").text(),
            size: $x(d).find("td").eq(2).text(),
            link: $x(d).find("td > a").attr("href"),
        })
    })
		    
      const shan = await axios.get(download_links[0].link);
      const $p = cheerio.load(shan.data);
      var data = $p("#link").attr("href");


const dat = data.split("https://pixeldrain.com/u/")[1]
const fhd = `https://pixeldrain.com/api/file/${dat}`


      const shan1 = await axios.get(download_links[1].link);
      const $m = cheerio.load(shan1.data);
      var data1 = $m("#link").attr("href");


const dat1 = data1.split("https://pixeldrain.com/u/")[1]
const hd = `https://pixeldrain.com/api/file/${dat1}`


      const shan2 = await axios.get(download_links[2].link);
      const $e = cheerio.load(shan2.data);
      var data2 = $e("#link").attr("href");
		    
const dat2 = data2.split("https://pixeldrain.com/u/")[1]
const sd = `https://pixeldrain.com/api/file/${dat2}`
		    
                      const msg = `📃 𝗧.𝗖 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥\n\n
📃 *Title:* ${newsHeadline}\n
🔗 *Link:* ${q}\n
📅 *Year:* ${date}\n
💫 *Rating:* ${rat}\n
⏳ *Duration:* ${duration}\n`
const categories = [];
            const categoryMap = new Map();

           for (let i = 0; i < 1; i++) {
                const cmd = commands[i];
                if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                    const category = cmd.category.toUpperCase();
                    if (!categoryMap.has(category)) {
                        categories.push(category);
                        categoryMap.set(category, []);
                    }
                    categoryMap.get(category).push(cmd.pattern);
                }
            }
                const rows = []
	    const rows1 = []
	    const rows2 = []
	    const rows3 = []
           for (const category of categories) {


                rows.push({
                    header: 'Select Mp4 Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}mp4 ` + sd
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}mp4 ` + hd
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}mp4 ` + fhd
                })    
                rows1.push({
                    header: 'Select Mkv Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}mkv ` + sd
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}mkv ` + hd
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}mkv ` + fhd
                }) 
		rows2.push({
                    header: 'Select Zip Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}zip ` + sd
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}zip ` + hd
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}zip ` + fhd
                }) 	
		rows3.push({
                    header: 'Select Rar Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}fetchrar ` + sd
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}fetchrar ` + hd
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}fetchrar ` + fhd
                }) 			  
            }	
            let buttons = [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD MP4 TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'MP4',
                            rows: rows,	
			          }]
                     }),	    
                    },
		{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD MKV TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'MKV',
                            rows: rows1,	
			          }]
                     }),	    
                    },
		{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD ZIP TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'ZIP',
                            rows: rows2,	
			          }]
                     }),	    
                    },
		{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD RAR TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'RAR',
                            rows: rows3,	
			          }]
                     }),	    
                    }	   	   
		]
            let opts = {
                image: newsTime,
                header: '',
                footer: config.FOOTER,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, opts, { quoted: mek});
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

	
   



//------------------------dl---------------






cmd({
    pattern: "mp4",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


        const mediaUrl = q.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');

var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}



        const message = {
            document: mediaBuffer,
	    caption: "*🎬 TC TEAM MOVIEDL 🎬*",
            mimetype: "TC MOVIE DL",
            fileName: "TC MOVIEDL.mp4",
        };

        await conn.sendMessage(config.JID, message, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});


cmd({
    pattern: "mkv",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


        const mediaUrl = q.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');

var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}


        const message = {
            document: mediaBuffer,
	    caption: "*🎬 TC TEAM MOVIEDL 🎬*",
            mimetype: "TC MOVIE DL",
            fileName: "TC MOVIEDL.mkv",
        };

        await conn.sendMessage(config.JID, message, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});


cmd({
    pattern: "zip",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


        const mediaUrl = q.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');

var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}


        const message = {
            document: mediaBuffer,
	    caption: "*🎬 TC TEAM MOVIEDL 🎬*",
            mimetype: "TC MOVIE DL",
            fileName: "TC MOVIEDL.zip",
        };

        await conn.sendMessage(config.JID, message, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
//==================================================================


cmd({
    pattern: "sinhalatvshow",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
	const url = `https://sinhalasub.lk/?s=${q}`
     const response = await axios.get(url);
    //if (response.status === 200) {
    const $ = cheerio.load(response.data);
    const data = $(".search-page .result-item article")
      .map((index, element) => ({
        No: index + 1,
        Title: $(element).find(".details .title a").text().trim(),
        Desc: $(element).find('.details .contenido p').text().trim(),
        Img:  $(element).find('.image img').attr("src"),
        Type: $(element).find('.image span').text().trim(),
        Link: $(element).find(".details .title a").attr("href"),
        Year: $(element).find('.details span .rating').text().trim(),
        Rating: $(element).find('.details span').text().trim(),

               
      }))

        if (data.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      	var rows = [];  
for (var i = 0; i < data.length; i++) {
	rows.push({
    
              header: data[i].Title,
              title: data[i].Type,
              description: data[i].Year,
              id: `.tvshow ${data[i].Link}`
            
          });
        }
          
        let buttons = [{
          name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Download Moive 📥',
                        sections: [{
                            title: 'Search By sinhalasub',
                            highlight_label: 'T.C MOVIE-DL',
                            rows: rows
                    }]
               }),
          }
      ]
        const info = `⏳ Search A Movie Name: ${q}
📲 Search top 10 Moive\n
sinhalasub`
        let opts = {
                image: `https://github.com/kushansewmina1234/DARKSHAN-DATA/blob/main/media/image/IMG-20240907-WA0006.jpg?raw=true`,
                header: '🎬━_*T.C SINHALASUB DL*_━🎬',
                footer: 'MOVIE DOWNLOADER BY TC',
                body: info 

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
            }
    })




cmd({
    pattern: "tvshow",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
	const url = `${q}`
     const response = await axios.get(url);
    
          const $ = cheerio.load(response.data);

    let download_links = [];
    $("#seasons > div > div > ul > li").each((c, d) => {
        download_links.push({
            name: $(d).find("div.episodiotitle > a").text(),
            number: $(d).find("div.numerando").text(),
            date: $(d).find("div.episodiotitle > span").text(),
            image: $(d).find("div.imagen > img").attr("src"),
            link: $(d).find("div.episodiotitle > a").attr("href"),
        })
    })
if (download_links.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      const tcteam = $("div#info.sbox");

        const image = tcteam.find("div > div img").attr("src");
        const title = tcteam.find('h1').text().trim();
        const episodes = tcteam.find('div.wp-content h3').text().trim();
        const desc = tcteam.find('div.wp-content p').text().trim();
        //const image = $('#dt_galery > div.owl-wrapper-outer > a > img').attr("src");
        const title2 = $('#info > div > p').text().trim();

	
	var rows = [];  
for (var i = 0; i < download_links.length; i++) {
	rows.push({
    
              header: download_links[i].number,
              title: download_links[i].name,
              description: download_links[i].date,
              id: `.subin2 ${download_links[i].link}`
            
          });
        }
          
        let buttons = [{
          name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Select episode 📥',
                        sections: [{
                            title: 'Search By sinhalasub',
                            highlight_label: 'T.C MOVIE-DL',
                            rows: rows
                    }]
               }),
          }
      ]



	
        const info = `
📌 *Link;* ${q}
📑 *Title:* ${title}`
        let opts = {
                image: ``,
                header: '🎬━_*T.C SINHALASUB DL*_━🎬',
                footer: 'MOVIE DOWNLOADER BY TC',
                body: info 

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
            }
    })	



cmd({
    pattern: "subin2",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
    async ( conn, mek, m, { reply, q, isDev, prefix, l, from }) => {
	 if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')   
	    try {
		    const url = `${q}`
     const response = await axios.get(url);
    
          const $ = cheerio.load(response.data);

		  const tcteam = $("div#info.sbox");

        const image = tcteam.find("div > div img").attr("src");
        const title = tcteam.find("div > div img").attr("alt");
        const episodes = tcteam.find('div.wp-content h3').text().trim();
        const desc = tcteam.find('div.wp-content p').text().trim();
        const title2 = tcteam.find('h1.epih1').text().trim();
        const date = tcteam.find('#info > span').text().trim()


let download_links = [];
    $("#download > div > div > table > tbody > tr").each((c, d) => {
        download_links.push({
            quality: $(d).find("strong").text(),
            size: $(d).find("td").eq(2).text(),
            link: $(d).find("td > a").attr("href"),
        })
    })
      const tc = await axios.get(download_links[0].link);
      const $p = cheerio.load(tc.data);
      var data = $p("#link").attr("href");

      const tc1 = await axios.get(download_links[1].link);
      const $m = cheerio.load(tc1.data);
      var data1 = $m("#link").attr("href");

      const tc2 = await axios.get(download_links[2].link);
      const $e = cheerio.load(tc2.data);
      var data2 = $e("#link").attr("href");
		    
                      const msg = `📃 𝗧.𝗖 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥\n\n
📌 *Title:* ${title2}\n
🔗 *Link:* ${date}\n
📃 *Description:* ${desc}\n`

                const categories = [];
            const categoryMap = new Map();

           for (let i = 0; i < 1; i++) {
                const cmd = commands[i];
                if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                    const category = cmd.category.toUpperCase();
                    if (!categoryMap.has(category)) {
                        categories.push(category);
                        categoryMap.set(category, []);
                    }
                    categoryMap.get(category).push(cmd.pattern);
                }
            }
                const rows = []
	    const rows1 = []
	    const rows2 = []
	    const rows3 = []
           for (const category of categories) {


                rows.push({
                    header: 'Select Mp4 Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}mp4 ` + data2
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}mp4 ` + data1
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}mp4 ` + data
                })    
                rows1.push({
                    header: 'Select Mkv Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}mkv ` + data2
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}mkv ` + data1
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}mkv ` + data
                }) 
		rows2.push({
                    header: 'Select Zip Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}zip ` + data2
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}zip ` + data1
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}zip ` + data
                }) 	
		rows3.push({
                    header: 'Select Rar Type Movie',
                    title: `SD 480P`,
                    description: '',
                    id: `${prefix}fetchrar ` + data2
		},
		{
                    header: '',
                    title: `HD 720P`,
                    description: '',
                    id: `${prefix}fetchrar ` + data1
                },
		{
                    header: '',
                    title: `FHD 1080P`,
                    description: '',
                    id: `${prefix}fetchrar ` + data
                }) 			  
            }	
            let buttons = [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD MP4 TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'MP4',
                            rows: rows,	
			          }]
                     }),	    
                    },
		{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD MKV TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'MKV',
                            rows: rows1,	
			          }]
                     }),	    
                    },
		{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD ZIP TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'ZIP',
                            rows: rows2,	
			          }]
                     }),	    
                    },
		{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD RAR TYPE',
                        sections: [{
                            title: 'Please select a quality',
                            highlight_label: 'RAR',
                            rows: rows3,	
			          }]
                     }),	    
                    }	   	   
		]
                let message = {
                    image: `${q}`,
                    header: '🎬━_*T.C SINHALASUB DL*_━🎬',
                    footer: 'MOVIE DOWNLOADER BY TC',
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)

	    } catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })





                                
