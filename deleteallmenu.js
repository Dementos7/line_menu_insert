const axios = require('axios');
const { config } = require("./config");

const LINE_CHANNEL_ACCESS_TOKEN = config.channelAccessToken;
const LINE_API_URL = 'https://api.line.me/v2/bot/richmenu';

async function deleteAllRichMenus() {
    try {
        const response = await axios.get('https://api.line.me/v2/bot/richmenu/list', {
            headers: {
                'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
            }
        });

        const richMenus = response.data.richmenus;
        console.log(richMenus);
        for (const richMenu of richMenus) {
            await axios.delete(`${LINE_API_URL}/${richMenu.richMenuId}`, {
                headers: {
                    'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
                }
            });
            console.log(`Deleted rich menu with ID: ${richMenu.richMenuId}`);
        }
    } catch (error) {
        console.error('Error deleting rich menus:', error);
    }
}

deleteAllRichMenus();
