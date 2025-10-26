const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21010026_UI-B77t-Od8.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
