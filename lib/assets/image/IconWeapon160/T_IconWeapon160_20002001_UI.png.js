const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_20002001_UI-DnaQOw0l.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
