const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21040013_UI-DLxgOHtT.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
