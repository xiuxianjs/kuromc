const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_24_UI-tJIDcpqC.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
