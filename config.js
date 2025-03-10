const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_40_03_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2TjFoTzE5NkZ5UmhQKzQwYzltT2Zuak51M1U3ZExITnZXY1R2S3kzdmVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFOW93V2pONVNkYTdtb1QzeXRwdVV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJlNTY1M2NiLTM1NTQtNDk5OS04M2U3LWI1MmMxZmFkYWRhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAyMTgsXG4gICAgICAyNDcsXG4gICAgICAxMjUsXG4gICAgICAzOCxcbiAgICAgIDE0NSxcbiAgICAgIDE5MSxcbiAgICAgIDIyMixcbiAgICAgIDE0MCxcbiAgICAgIDExOCxcbiAgICAgIDE5NCxcbiAgICAgIDIxNixcbiAgICAgIDE2LFxuICAgICAgMjAwLFxuICAgICAgMjMzLFxuICAgICAgNzUsXG4gICAgICAxNTUsXG4gICAgICAxMTEsXG4gICAgICAxODAsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxMDAsXG4gICAgICA2MyxcbiAgICAgIDE1MixcbiAgICAgIDE5LFxuICAgICAgMjAsXG4gICAgICA4MSxcbiAgICAgIDEwOCxcbiAgICAgIDQsXG4gICAgICA0NixcbiAgICAgIDc2LFxuICAgICAgODYsXG4gICAgICAxNTUsXG4gICAgICAyOSxcbiAgICAgIDQxLFxuICAgICAgMTkwLFxuICAgICAgMjI0LFxuICAgICAgMTYzLFxuICAgICAgMTkyLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkNBWFRKMUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDc2ODIyOTU1NzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI5MjU3MjAwNTU0MTc1OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovbXpMSUZFTWFjdmI0R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWHV5ZGhYbFZHeTAwS0lDbFZidjhhMXZiK25mZy9SeWZqR0tBKzR2alRnWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4eEtZeWZGaWovbnhPbWhPZCtiOUE1b1BLNmd0NDJDdlAzMnBvelRUQ2Qzc3pzVHllR0hSaTJPNzg5RlBCWGY4MlJCWDlxd2hPcVEvYlczUlBlUWlDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5T2NXQkIvdjFERytFcVQrOENmbDlGRVM3aEFCOTEyNjZ3SXkyTjNpcXY3ajlBOEMwQ1BkWk9heWZJc3U2Z1RwbjlFRGo4WE5KcUFsMWZjN21najhnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA3NjgyMjk1NTc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTYzOTI0MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
