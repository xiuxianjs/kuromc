const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21010074_UI-jLuVG5hn.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
