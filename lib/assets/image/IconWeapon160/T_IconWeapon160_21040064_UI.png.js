const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21040064_UI-2DNxSSdv.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
