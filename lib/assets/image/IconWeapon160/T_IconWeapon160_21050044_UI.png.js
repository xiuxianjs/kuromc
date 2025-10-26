const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21050044_UI-E6Asc-BB.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
