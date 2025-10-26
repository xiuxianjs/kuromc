const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21010011_UI-Di3O4u6I.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
