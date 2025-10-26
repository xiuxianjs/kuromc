const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_13_UI-B7ICqpss.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
