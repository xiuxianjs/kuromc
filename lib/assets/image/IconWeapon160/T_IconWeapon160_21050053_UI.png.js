const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../../T_IconWeapon160_21050053_UI-Z4Y9UA_k.png', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
