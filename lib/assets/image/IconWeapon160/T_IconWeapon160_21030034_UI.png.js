const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21030034_UI-gb2Xjpn3.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
