const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_7_UI-B4we20pg.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
