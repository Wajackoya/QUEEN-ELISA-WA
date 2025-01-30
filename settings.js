require('dotenv').config({ path: './elisaConfig.env' });
/*
PROJECT: QUEEN ELISA WHATSAPP BOT
VERSION: 4.0.2
OWNER: @darkmakerofc | @MR-NIMA-X
*/

module.exports = {
  SESSION_ID: process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"uCsMO7jVEQ3/gkht0hUZuHf1AWDY65OqF0iTE0z8Z2A="},"public":{"type":"Buffer","data":"/HoCt8zzyq2VQjtLh869DVge8TvmaOK3mW+hVRlCeEg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0OrDvghTPe92mAmE9HRvlFn8jpOFKDwGn6afpmbn0Hs="},"public":{"type":"Buffer","data":"FgUM5q7CFFDzs+4Z13YeNGskWwZrh/B0G08iQ7X8ZRY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iBiuHg/a/T55DVh8mSD+o1TyG4e5Kf6lAXlZd+620EQ="},"public":{"type":"Buffer","data":"hOB4dhBhTqNGdlxDujRRoMkqAIcEtVK/zwmIPrNwmjU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iCrW9w2t5vFwB/UVfAtCWiY8CXiqTCvnM7nBYgtKJE8="},"public":{"type":"Buffer","data":"UN/Erok7Hr9UMMug8S34wbjl8DghUU9vWclqdlmSnW4="}},"signature":{"type":"Buffer","data":"enfuw6zolqCoisnTXgOKHxgN1/F2LEfZgkSTr4Oo5q8SW8WUykM144P2h/FlGiTEm9WBvokFQ0Ve9VijQATRhw=="},"keyId":1},"registrationId":50,"advSecretKey":"zGKuDgtZhvtfLs9ermRiGa66oFXjebGI9g8HLT8i/Kk=","processedHistoryMessages":[{"key":{"remoteJid":"254111659469@s.whatsapp.net","fromMe":true,"id":"3AEF891CE26D15935851"},"messageTimestamp":1738274751},{"key":{"remoteJid":"254111659469@s.whatsapp.net","fromMe":true,"id":"3A016B3F3AF4B56008E0"},"messageTimestamp":1738274754},{"key":{"remoteJid":"254111659469@s.whatsapp.net","fromMe":true,"id":"3AB29CAA451E751D51BB"},"messageTimestamp":1738274755}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"A-NlAKVjTk6QjGSkIksGGQ","phoneId":"bf5478cd-4852-4982-aa8a-f443a125a99f","identityId":{"type":"Buffer","data":"PDqDNkpTejNIi5wCiSUmlU1gukE="},"registered":true,"backupToken":{"type":"Buffer","data":"aptCEEDDwJH5BaV1mnBBmhzvV6w="},"registration":{},"pairingCode":"ME572GA5","me":{"id":"254111659469:12@s.whatsapp.net","lid":"74917685010441:12@lid","name":"Wajack Bodyguard"},"account":{"details":"CJj6ts4LELvv77wGGAEgACgA","accountSignatureKey":"xaXjv7f9Og4cZe8TiToE8sBVhqLq3dNC7rkTij4+jxo=","accountSignature":"k4kzLgSgjQToMxvnQO2YQTvjBmJePjbw6lJxbYUQNuYZUpSG6U0gIKmRABJOxCwkMFdOK5sZym1Za7/U24CHAQ==","deviceSignature":"xczDWJEpP9Qcr0jI8wiLIOJw07G9H/cf063izxW/k/OJkuViNN42aHLviYaKIndLSGP1cIC86Kv9ANzsIrrmhA=="},"signalIdentities":[{"identifier":{"name":"254111659469:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcWl47+3/ToOHGXvE4k6BPLAVYai6t3TQu65E4o+Po8a"}}],"platform":"iphone","lastAccountSyncTimestamp":1738274749,"myAppStateKeyId":"AAAAAOQP"}',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: process.env.MONGODB_URL|| '',
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: process.env.PORT || 3000,
  BOT_NAME: 'queen elisa',
  OWNER_NAME: 'WAJACKS',
  OWNER_NUMBER: '254102510747',
  SUDO: '254111659469',
  WORK_TYPE: 'public', // ex: public/private
  WORK_MODE: 'all', // ex: all/only_groups/only_pm
  TIME_ZONE: 'Africa/Nairobi',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ\nmr-nima.vercell.app',
  STICKER_AUTHOR: 'ᴍ ʀ  ɴ ɪ ᴍ ᴀ',
  STICKER_PACK: 'QUEEN ELISA',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90, //size in MB
  OWNER_R_EMOJI: '💻',
  ALIVE_AS_GIF: true,//this only work for short videos
  AUTO_VOICE: true,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: true,// you want WORK_MODE message send
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,// Bot online status
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: false, // This not working now !
  ANTI_DELETE: false,
  BANED_USER_MSG_SEND: true,
  BLOCK_CMD_MSG_SEND: true,
  INBOX_BLOCK_MSG_SEND: true,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,// disabled
  BUTTON_MESSAGES: false,// Don't change this
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

