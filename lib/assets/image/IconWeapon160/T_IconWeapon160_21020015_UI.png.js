const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21020015_UI-tVW06cGP.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
