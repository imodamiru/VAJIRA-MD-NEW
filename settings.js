const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=fd1mkC6L#9NObSDMxZ7YW29b2M10vDxwD719OrlQiVX_UDTE8HZM' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94743747913' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'true' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ 👨‍💻': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://naveed_user:jR4C57sJsFIBNO18OxxD6CtqzOvhTXYk@dpg-dn5D1nug2bec738cqi4g-a.frankfurt-postgres.render.com/naveed' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,    
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,        
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || true  ,
MATHS_AI: process.env.MATHS_AI || false  ,    
WELCOME: process.env.WELCOME || false  ,    
LOGO: process.env.LOGO || `https://telegra.ph/file/cce13b56a460afc9f4139.jpg` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,    
ANTI_DELETE : process.env.ANTI_DELETE || true ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '94743747913' : process.env.DELETEMSGSENDTO        
    
};
