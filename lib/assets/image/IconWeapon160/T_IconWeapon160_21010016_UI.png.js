const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21010016_UI-Cpd57Qms.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
