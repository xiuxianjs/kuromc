const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_3_UI-w1OUwNL7.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
