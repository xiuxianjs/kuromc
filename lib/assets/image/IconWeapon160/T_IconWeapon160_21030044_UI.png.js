const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21030044_UI-Bb0TbraZ.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
