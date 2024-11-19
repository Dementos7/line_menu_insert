const axios = require('axios');
const { config } = require("./config");

const channelAccessToken = config.channelAccessToken;

async function getDefaultRichMenuId() {
    try {
        const response = await axios.get('https://api.line.me/v2/bot/richmenu/list', {
            headers: {
                'Authorization': `Bearer ${channelAccessToken}`
            }
        });
        const richMenus = response.data.richmenus;
        console.log(JSON.stringify(richMenus));
        // const defaultRichMenuId = richMenus.find(menu => menu.isDefault).richMenuId;
        // console.log('Default Rich Menu ID:', defaultRichMenuId);
    } catch (error) {
        console.error('Error fetching rich menu:', error);
    }
}

getDefaultRichMenuId();
