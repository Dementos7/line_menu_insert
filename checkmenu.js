const axios = require('axios');
const { config } = require("./config");


const channelAccessToken = config.channelAccessToken;
const richMenuId = config.richMenuId;

axios.post(`https://api.line.me/v2/bot/user/all/richmenu/${richMenuId}`, {}, {
    headers: {
        'Authorization': `Bearer ${channelAccessToken}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Rich menu set as default:', response.data);
})
.catch(error => {
    console.error('Error setting rich menu:', error.response.data);
});