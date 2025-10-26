const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21020013_UI-DBg3lEPT.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
