`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import { MessageType } from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { proto } from "@adiwajshing/baileys";
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
import * as fs from 'fs';
import path from 'path';
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
export = {
name: dotScrpt,
async handle(
TUF: Client,
Fox: proto.IWebMessageInfo,
AʀƈȶɨӼ: AʀƈȶɨӼ,
ǟʀɢʊʍɛռȶ: string[],
ӄʀʏȶɛӄ
): Promise<void> {
await TUF.sendMessage(
AʀƈȶɨӼ.chatId,
{
quoted: Fox,
timestamp: Date(),
contextInfo: { mentionedJid: [AʀƈȶɨӼ.sender] },
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ.png" },
caption: `╔═⟢  𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®
║♩ *ᴛᴀɢ:* _@${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}_
║♭ *ɴᴀᴍᴇ:* _${Fox.pushName}_
║♪ *ᴄᴏᴍᴍᴀɴᴅ:* _${AʀƈȶɨӼ.commandName}_
╚═════⟢

╔════⧉🗂️ 𝐅𝐅𝐦𝐩𝐞𝐠
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}vid2url:*  _convert video to url_ 
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}tomp3:*  _convert video to music_
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}img2url:*  _convert image to url_
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}ocr:*  _read text written on tagged image_
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}sticker:*  _convert image/video to sticker_
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}carbon:*  _convert text to carbonized image_
║• *${ʟᴀʏᴏᴜᴛ.MuveOn}tinyurl:*  _shrink any long url_
╚════════════╝`,
footer: "`⦓ 𝐀𝐫𝐜𝐭𝐢𝐱 ⦔",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
