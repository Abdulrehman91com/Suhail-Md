const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923198711323" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923198711323";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923198711323";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_59_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZyazlwOGx1bllLWmJXenJnWW5YVHo2MjErSFAwWTh3eFNZZkZwR0NLN1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjY4a09Yc190UThpT28yNGZNbDZKQVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDc0ZWY2MTUtOTllZi00ZDczLWIxMDctY2JkYzc3NjkwYzdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDc0LFxuICAgICAgMjI5LFxuICAgICAgNjMsXG4gICAgICAxOTIsXG4gICAgICA0NyxcbiAgICAgIDI5LFxuICAgICAgMjM5LFxuICAgICAgMTI0LFxuICAgICAgMjI5LFxuICAgICAgMzEsXG4gICAgICAyMSxcbiAgICAgIDExNSxcbiAgICAgIDIxMSxcbiAgICAgIDEwNixcbiAgICAgIDE4NSxcbiAgICAgIDE3MixcbiAgICAgIDE0NSxcbiAgICAgIDIxMSxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAyMTcsXG4gICAgICAxMCxcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICA1NixcbiAgICAgIDE1MSxcbiAgICAgIDE1NixcbiAgICAgIDIyMCxcbiAgICAgIDIwMCxcbiAgICAgIDIzLFxuICAgICAgMjUxLFxuICAgICAgMTcwLFxuICAgICAgMTgsXG4gICAgICAyOCxcbiAgICAgIDEyMCxcbiAgICAgIDg1LFxuICAgICAgMjE2LFxuICAgICAgMjU0LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRDkwWThGRUxmaTJMRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhNMjN3Nm41V0FaTVMyS1RjVVBZWEJwaSsrZFZiUEhzUnZiMkxNMm9rQ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3hxTUI0cUZPL2dBMmFGZnBhZzNicjVnbHBUa29RdHJUNnYzb3h2ejZtdXNlKzNzMng4RHUvRmMvS1R4Y2RXS0ZaWnBKK0V3UllnS0V5YXBSWURGQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidXI0R2RmRVRpMlEvVU1CSHNmanpseDg2dTVsOXVidk9JdjN1bmlkK3NQTXJsVnZwMCt5RHAxS0xGMGowMm5oaDIxVFRMNU1QTzJ1eXBLTlM5amZJaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTg3MTEzMjM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTYzMjU5NDcyNjk5NDoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCaWxhbCBBaG1lZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk4NzExMzIzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0ODI3NTc4XG59Igp9
  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ABDULLAH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
