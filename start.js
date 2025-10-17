/*

  !- Credits By SamhaxStore
  https://wa.me/923096761027
  
*/

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

// The pairingCode is set to true to force the pairing code method.
const pairingCode = true
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, randomToken } = require('./library/function');
const { welcomeBanner, promoteBanner } = require("./library/welcome.js")

// --- UPDATED BANNER FUNCTION ---
const startBanner = () => {
    // 1. Display Samhax Store in large, stylized font
    say('SAMHAX STORE', {
        font: 'block', // Block font for a similar look to the image
        align: 'center',
        colors: ['#00FFFF', 'yellow'], // Cyan/Blue and Yellow colors
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
        gradient: false,
        independentGradient: false,
        transitionGradient: false,
        env: 'node'
    });

    // 2. Display the smaller welcome/instruction text
    console.log(chalk.cyan.bold('\n\n\tStarting Samhax Store Bot...'))
    console.log(chalk.green.bold('\tDatabase loaded successfully'))
    console.log(chalk.yellow.bold('\tInitializing database...'))
    console.log(chalk.magenta.bold('\n\tWHATSAPP AUTHENTICATION METHOD'))
    
    // 3. Display the single option (Pairing Code) in the box-like format
    console.log(chalk.hex('#8B008B').bold(`\n\t╔═════════════════════════╗`));
    console.log(chalk.hex('#8B008B').bold(`\t║ 🔲 Pairing Code Active  ║`)); // Simplified text since it's the only option
    console.log(chalk.hex('#8B008B').bold(`\t╚═════════════════════════╝\n`));
}
// --- END UPDATED BANNER FUNCTION ---


async function startingBot() {
    startBanner() // <--- CALL THE NEW BANNER HERE
    
const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState('session');
const { version } = await axios.get("https://raw.githubusercontent.com/nstar-y/Bail/refs/heads/main/src/Defaults/baileys-version.json").then(res => res.data)
    
const WazIT = await WAConnection({
version: version, 
printQRInTerminal: !pairingCode, 
logger: pino({ level: "silent" }),
auth: state,
browser: ["Ubuntu","Chrome","22.04.2"],
generateHighQualityLinkPreview: true,     
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'Successfully Connected to Samhax Store'
}}})
    
if (pairingCode && !WazIT.authState.creds.registered) {
let phoneNumber
// UPDATED PROMPT: Retained box-like styling around the pairing code input prompt
console.log(chalk.hex('#8B008B').bold(`\n\t╔═════════════════════════════════╗`));
phoneNumber = await question(chalk.yellow.bold(' ENTER YOUR NUMBER e.g 92309XXXX :\n\t'))
console.log(chalk.hex('#8B008B').bold(`\t╚═════════════════════════════════╝\n`));

phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
let code = await WazIT.requestPairingCode(phoneNumber);
code = code.match(/.{1,4}/g).join(" - ") || code
await console.log(`${chalk.yellow.bold('Number checked. Here is your code')} : ${chalk.white.bold(code)}`)
}
    
WazIT.ev.on('creds.update', await saveCreds)

WazIT.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, receivedPendingNotifications } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.connectionLost) {
console.log('Connection to Server Lost, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('Connection closed, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startingBot()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection Timed Out, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.badSession) {
console.log('Delete Session and Scan again...');
startingBot()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Close current Session first...');
startingBot()
} else if (reason === DisconnectReason.loggedOut) {
console.log('Scan again and Run...');
exec('rm -rf ./session/*')
process.exit(1)
} else if (reason === DisconnectReason.Multidevicemismatch) {
console.log('Scan again...');
exec('rm -rf ./session/*')
process.exit(0)
} else {        
WazIT.end(`Unknown DisconnectReason : ${reason}|${connection}`)
}}
if (connection == 'open') {
let inviteLink = "https://whatsapp.com/channel/0029VbB0HSH96H4VtAMI5D0j"; 
        try {
            let inviteCode = inviteLink.split('/')[3]; 
            await WazIT.groupAcceptInvite(inviteCode);
        } catch (error) {
        }
        const channelIDs = [
        "1234567890@newsletter",
    ];

    for (const id of channelIDs) {
        try {
            await WazIT.newsletterFollow(id);
        } catch (err) {
        }
    }
// WhatsApp message on success
WazIT.sendMessage(WazIT.user.id.split(":")[0] + "@s.whatsapp.net", {
  text: `
(・\_・) Yare Yare...
 
*Samhax Store is now Online!* ✅
 
Welcome to the store! We are successfully connected and ready for action. 🚀
 
*Connect with us!*
🌐 *Telegram Channel:* t.me/samhaxstore
 
_What will you be shopping for today?_ 🛍️
  `.toString()
});
// Console message on success
console.log(chalk.blue.bold(`
  ╭───────────────────────────────────────────────────╮
  │        ${chalk.red.bold('(・\_・) YARE YARE...')} 😒                │
  │                                                                  │
  │        ${chalk.yellow.bold('✅ Successfully Connected to Samhax Store!')} 🛍️  │
  │                                                                  │
  │        Welcome! Explore our store 🏪 and connect here!          │
  │                                                                  │
  │        🔗 ${chalk.green.bold('Telegram Channel: t.me/samhaxstore')}                  │
  │                                                                  │
  │        ${chalk.cyan.bold('What will you do now?')} 💻                         │
  ╰───────────────────────────────────────────────────╯
`));
randomToken(WazIT)
} else if (receivedPendingNotifications == 'true') {
console.log('Please wait About 1 Minute...')
}})

await store.bind(WazIT.ev)  
await Solving(WazIT, store)
    
WazIT.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(WazIT, message, store);
})

WazIT.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 
WazIT.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})
    
WazIT.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await WazIT.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await WazIT.profilePictureUrl(n, 'image');
} catch {
profile = 'https://cdn.discordapp.com/avatars/785375886538309643/1c43525996a682ed2463e18f3f17870a';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} has *add* @${n.split('@')[0]} into the group` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await WazIT.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "Yare Yare, Welcome to Samhax Domain its time for you to drop your Introduction😎", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} has *left* the group` : author !== n ? `@${author.split("@")[0]} has *issued* @${n.split('@')[0]} from the group` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await WazIT.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "What a Dumpkopf , GoodBye Traitor", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} has *become* Alfred of the group ` : author !== n ? `@${author.split("@")[0]} has *made* @${n.split('@')[0]} as group *admin*` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await WazIT.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "B U T L E R 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} has *suspended* being *butler*` : author !== n ? `@${author.split("@")[0]} has *stopped* @${n.split('@')[0]} as group *admin*` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await WazIT.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "T R A I T O R 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return WazIT

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
});