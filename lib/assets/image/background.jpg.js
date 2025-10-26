const reg = ['win32'].includes(process.platform) ? /^file:\/\/\// : /^file:\/\// ;
const fileUrl = new URL('../background-_P4vnfC8.jpg', import.meta.url).href.replace(reg, '');

export { fileUrl as default };
