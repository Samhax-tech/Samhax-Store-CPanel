/*

  !- Credits By SamhaxStore
  https://wa.me/923287573267
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '923096761027'
global.versi = "1"
global.namaOwner = "꧁༒♛ 𝙍𝙞𝙥𝙥𝙚𝙧 𝙎𝙖𝙢𝙝𝙖𝙭 ♛༒꧂"
global.packname = '꧁༒♛ 𝙍𝙞𝙥𝙥𝙚𝙧 𝙎𝙖𝙢𝙝𝙖𝙭 ♛༒꧂'
global.botname = '𝙎𝙖𝙢𝙝𝙖𝙭 𝙎𝙩𝙤𝙧𝙚 𝙋𝙖𝙣𝙚𝙡'
global.botname2 = '𝙎𝙖𝙢𝙝𝙖𝙭 𝙎𝙩𝙤𝙧𝙚 𝙋𝙖𝙣𝙚𝙡 '
global.creator = '120363319544970162@s.whatsapp.net'

//~~~~~~~~~~ Settings Channel~~~~~~~~~//
global.channellink= "https://whatsapp.com/channel/0029VbB0HSH96H4VtAMI5D0j"
global.channellink2 = "https://whatsapp.com/channel/0029VbB0HSH96H4VtAMI5D0j"
global.channelid = "919625092848@newsletter"
global.channelname = "𝙎𝙖𝙢𝙝𝙖𝙭 𝙎𝙩𝙤𝙧𝙚"



//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/0ep189.jpg", 
reply: "https://files.catbox.moe/0ep189.jpg", 
logo: "https://files.catbox.moe/0ep189.jpg", 
qris: "https://files.catbox.moe/0ep189.jpg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://panel.samhaxhostix.online" //Your domain, don't give it a sloping line ( /) behind the domain
global.apikey = "ptla_o0WiCm7rBTHTy9Rqx81Ztnz7TLhW5p8fc4GQsE42gsy" //ptla mu
global.capikey = "ptlc_Pg11fNI9Tgmohkc2Laf060OGXlKdNC0svzbAFCDsbW3" //ptlc mu

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://panel.samhaxhostix.online" //Your domain, don't give it a sloping line ( /) behind the domainmain
global.apikeyV2 = "ptla_o0WiCm7rBTHTy9Rqx81Ztnz7TLhW5p8fc4GQsE42gsy" //ptla
global.capikeyV2 = "ptlc_Pg11fNI9Tgmohkc2Laf060OGXlKdNC0svzbAFCDsbW3" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV3 = "15" // Egg ID
global.nestidV3 = "5" // nest ID
global.locV3 = "1" // Location ID
global.domainV3 = "https:panel.samhaxhostix.online" //Your domain, don't give it a sloping line ( /) behind the domain
global.apikeyV3 = "ptla_o0WiCm7rBTHTy9Rqx81Ztnz7TLhW5p8fc4GQsE42gsy" //ptla
global.capikeyV3 = "ptlc_Pg11fNI9Tgmohkc2Laf060OGXlKdNC0svzbAFCDsbW3" //ptlc

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Muri Muri! ]*\nYou are not eligible for this command! Only **Lord Samhax** can use it! 👑",
	admin: "*[ Muri Muri! ]*\nYou are not eligible for this command! Only the **Higher Ups** can use it!",
	botAdmin: "*[ Yare Yare... 🤦‍♂️ ]*\nThis command demands **Higher Ups** authority! The bot needs to be in the group. 🚫",
	group: "*[ Yare Yare ]*\nTo use this command in groups with higher ups authority! 🫂",
	private: "*[ **Restricted Domain** 💀 ]*\nThis command is not for public eyes. Silence is required. 🚫",
	prem: "*[ Muri Muri! ]*\nYou are not eligible for this command! Only Lord Samhax disciple can use it! ✨",
	wait: 'Loading... Chotto Matte! ⏳',
	error: 'Error! Kuso ⚠️',
	done: 'Done! Champ 🎉'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


