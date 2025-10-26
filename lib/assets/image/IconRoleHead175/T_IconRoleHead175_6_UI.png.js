const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_6_UI-CWKmu9Cd.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
