const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_23_UI-iRgaEnHN.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
