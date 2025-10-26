const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconElementLight3-Cym9Q7WK.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
