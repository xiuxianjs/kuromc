const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21030011_UI-DecxnFuS.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
