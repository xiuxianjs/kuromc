const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconRoleHead175_5_UI-Dk9hSDy8.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
