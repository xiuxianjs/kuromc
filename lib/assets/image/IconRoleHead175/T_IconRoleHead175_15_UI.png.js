const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_15_UI-DVawHyxS.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
