const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconElementWind3-E1KR1hFQ.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
