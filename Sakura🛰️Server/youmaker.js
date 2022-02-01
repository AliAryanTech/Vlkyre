const { JSDOM } = require("jsdom");
const fetch = require("node-fetch");
const FormData = require("form-data");
const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");
const { fromBuffer } = require("file-type");
//varuable
const ytIdRegex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

//fucntion
function post(url, formdata) {
try {
return fetch(url, {
method: "POST",
headers: {
accept: "*/*",
"accept-language": "en-US,en;q=0.9",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
},
body: Object.keys(formdata)
.map((key) => `${key}=${encodeURIComponent(formdata[key])}`)
.join("&"),
});
} catch (Error) {
console.log("Error: " + Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
}

function YouTube_Music(url) {
try {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url);
url = "https://youtu.be/" + ytId[1];
post("https://www.y2mate.com/mates/en60/analyze/ajax", {
url,
q_auto: 0,
ajax: 1,
})
.then((res) => res.json())
.then((res) => {
let document = new JSDOM(res.result).window.document;
let type = document.querySelectorAll("td");
let filesize = type[type.length - 10].innerHTML;
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || [
"",
"",
];
let thumb = document.querySelector("img").src;
let title = document.querySelector("b").innerHTML;

post("https://www.y2mate.com/mates/en60/convert", {
type: "youtube",
_id: id[1],
v_id: ytId[1],
ajax: "1",
token: "",
ftype: "mp3",
fquality: 128,
})
.then((res) => res.json())
.then((res) => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize));
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB,
});
})
.catch(reject);
})
.catch(reject);
} else reject("URL INVALID");
});
} catch (Error) {
console.log("Error: " + Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
}

function Instagram_Dwnloader(url_media) {
try {
return new Promise((resolve, reject) => {
url_media = url_media.replace("reel", "p");
var url = "https://igram.io/i/";
const requestBody = {
url: url_media.replace("reel", "p"),
lang_code: "en",
};

const config = {
headers: {
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75",
"x-requested-with": " XMLHttpRequest",
origin: " https://igram.io",
referer: " https://igram.io/en/dl/",
"sec-fetch-dest": " empty",
"sec-fetch-mode": " cors",
"sec-fetch-site": " same-origin",
"Content-Type": "application/x-www-form-urlencoded",
Cookie: "__cfduid=d4c2ddc2229a4d74c28b6ba25cdcd2a181618175605",
},
};

axios
.post(url, qs.stringify(requestBody), config)
.then((result) => {
let $ = cheerio.load(result.data),
ig = [];
//Obter todos os links de videos da pagina carregada
$("[data-mediatype=Video]").each((i, element) => {
let cheerioElement = $(element);
ig.push(cheerioElement.attr("href"));
});
//Obter todos os links de imagem da pagina carregada
$("div > div.bg-white.border.rounded-sm.max-w-md > img").each(
(i, element) => {
let cheerioElement = $(element);
ig.push(cheerioElement.attr("src"));
}
);

resolve({
results_number: ig.length,
url_list: ig,
});
})
.catch((err) => {
console.log(err.response);
reject(err);
});
});
} catch (Error) {
console.log("Error: " + Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
}

function YouTube_Video(url) {
try {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url);
url = "https://youtu.be/" + ytId[1];
post("https://www.y2mate.com/mates/en60/analyze/ajax", {
url,
q_auto: 0,
ajax: 1,
})
.then((res) => res.json())
.then((res) => {
document = new JSDOM(res.result).window.document;
yaha = document.querySelectorAll("td");
filesize = yaha[yaha.length - 23].innerHTML;
id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || [
"",
"",
];
thumb = document.querySelector("img").src;
title = document.querySelector("b").innerHTML;

post("https://www.y2mate.com/mates/en60/convert", {
type: "youtube",
_id: id[1],
v_id: ytId[1],
ajax: "1",
token: "",
ftype: "mp4",
fquality: 360,
})
.then((res) => res.json())
.then((res) => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize));
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB,
});
})
.catch(reject);
})
.catch(reject);
} else reject("URL INVALID");
});
} catch (Error) {
console.log("Error: " + Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
}
function upload(media) {
try {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(media);
console.log("Uploading image to server telegra.ph");
let form = new FormData();
form.append("file", media, "tmp." + ext);
await fetch("https://telegra.ph/upload", {
method: "POST",
body: form,
})
.then((res) => res.json())
.then((res) => {
if (res.error) return reject(res.error);
resolve("https://telegra.ph" + res[0].src);
})
.catch((err) => reject(err));
} catch (e) {
return console.log(e);
}
});
} catch (Error) {
console.log("Error: " + Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
}

function formatDate(n, locale = "id") {
try {
let d = new Date(n);
return d.toLocaleDateString(locale, {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric",
hour: "numeric",
minute: "numeric",
second: "numeric",
});
} catch (Error) {
console.log("Error: " + Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
}
module.exports.YouTube_Music = YouTube_Music;
module.exports.YouTube_Video = YouTube_Video;
module.exports.Instagram_Dwnloader = Instagram_Dwnloader;
module.exports.upload = upload;
module.exports.formatDate = formatDate;
