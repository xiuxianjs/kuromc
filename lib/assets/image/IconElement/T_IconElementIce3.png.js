const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconElementIce3-CvrN5Dbd.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
