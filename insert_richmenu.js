const line = require('@line/bot-sdk');
const fs = require('fs');
const { config } = require("./config");


// Create a LINE SDK client
const client = new line.Client({
  channelAccessToken: config.channelAccessToken
});

// Define the rich menu
const richMenu = {
  size: {
    width: 2500,
    height: 843
  },
  selected: true,
  name: 'Rich Menu',
  chatBarText: 'Tap here',
  areas: [
    {
      bounds: { x: 0, y: 0, width: 833, height: 843 },
      action: {
        type: 'postback',
        data: 'action=standard',
        label: 'Standard'
      }
    },
    {
      bounds: { x: 833, y: 0, width: 833, height: 843 },
      action: {
        type: 'postback',
        data: 'action=remainder',
        label: 'Remainder'
      }
    },
    {
      bounds: { x: 1666, y: 0, width: 833, height: 843 },
      action: {
        type: 'postback',
        data: 'action=linepay',
        label: 'Line Pay'
      }
    }
  ]
};

// Create the rich menu
client.createRichMenu(richMenu)
  .then((richMenuId) => {
    console.log(`Rich menu created with ID: ${richMenuId}`);

    // Upload the image for the rich menu
    const imagePath = './rich-menu-image.png';
    const stream = fs.createReadStream(imagePath);
    return client.setRichMenuImage(richMenuId, stream);
  })
  .then(() => {
    console.log('Rich menu image uploaded successfully');
  })
  .catch((err) => {
    console.error(err);
  });