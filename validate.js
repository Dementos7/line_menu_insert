const line = require('@line/bot-sdk');
const { config } = require("./config");



const client = new line.Client(config);

const validateRichMenu = async (richMenuId) => {
    try {
        const richMenu = await client.getRichMenu(richMenuId);
        console.log('Rich Menu Validation Successful:', richMenu);
    } catch (error) {
        console.error('Error validating Rich Menu:', error);
    }
};

// Replace 'YOUR_RICH_MENU_ID' with the actual Rich Menu ID
validateRichMenu(config.menuId);