const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_14_UI-WE2Ki30-.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
