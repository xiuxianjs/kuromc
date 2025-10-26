const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconElementDark3-z8kthvNs.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
