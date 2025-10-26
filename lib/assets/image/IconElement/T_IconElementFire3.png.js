const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconElementFire3-C5jfr9z4.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
