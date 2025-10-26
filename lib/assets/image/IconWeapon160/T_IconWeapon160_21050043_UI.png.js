const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21050043_UI-C3eOmo3Z.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
