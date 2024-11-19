const line = require('@line/bot-sdk');
const { config } = require("./config");

const client = new line.Client(config);

async function checkRichMenuImage(richMenuId) {
    try {
        const richMenu = await client.getRichMenu(richMenuId);
        console.log('Rich Menu:', richMenu);
        
        const imageResponse = await client.getRichMenuImage(richMenuId);
        console.log('Rich Menu Image:', imageResponse);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const richMenuId = config.menuId;
checkRichMenuImage(richMenuId);
