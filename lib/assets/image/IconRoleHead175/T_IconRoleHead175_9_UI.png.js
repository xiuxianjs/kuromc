const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_9_UI-i4wUEIkb.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
