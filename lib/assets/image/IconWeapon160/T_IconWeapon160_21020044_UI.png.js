const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21020044_UI-De_IwXyP.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
