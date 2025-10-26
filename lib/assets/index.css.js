const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('index.css-BTZ9sl14.css', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
