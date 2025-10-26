const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('kuromc.css-Dcv54g5J.css', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
