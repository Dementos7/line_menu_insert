// Set a rich menu default in Line official account
const line = require('@line/bot-sdk');
const { config } = require("./config");
 
const client = new line.Client(config);

const richMenuId = config.menuId;

client.setDefaultRichMenu(richMenuId)
    .then(() => {
        console.log('Default rich menu set successfully');
    })
    .catch((err) => {
        console.error('Error setting default rich menu:', err);
    });
