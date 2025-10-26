import React from 'react';
import Page from './layout/page.js';

const Footer = () => {
    return (React.createElement("div", { className: 'kuromc-text border-l-4 bg-black bg-opacity-50 p-4 border-[#f2d57c]' },
        React.createElement("h4", { className: 'text-xl font-bold' }, "\u62BD\u5361\u94FE\u63A5\u83B7\u53D6"),
        React.createElement("div", null,
            React.createElement("p", { className: 'mt-1' }, "\u624B\u673A\u6253\u5F00\u62BD\u5361\u754C\u9762\uFF0C\u7136\u540E\u65AD\u7F51\u70B9\u5F00\u5386\u53F2\u8BB0\u5F55\uFF1B\u5DE6\u4E0A\u89D2\u7A7A\u767D\u957F\u6309\u7136\u540E\u5168\u9009\u590D\u5236\u3002"),
            React.createElement("p", { className: 'mt-1' }, "\u7535\u8111\u6253\u5F00\u62BD\u5361\uFF0C\u7136\u540E\u627E\u5230\u9E23\u6F6E\u5B89\u88C5\u76EE\u5F55\u627E\u5230Wuthering Waves\\Wuthering Waves Game\\Client\\Saved\\Logs\\Client.log\u6587\u4EF6\u6253\u5F00\uFF0C\u641C\u7D22aki-gm-resources\u6700\u540E\u4E00\u6761\u8BB0\u5F55\u5C31\u662F\u62BD\u5361\u94FE\u63A5\u3002"))));
};
function App() {
    return (React.createElement(Page, null,
        React.createElement("h2", { className: 'text-4xl font-bold tracking-tight text-center pt-8 kuromc-text-title' }, "\u9E23\u6F6E\u62BD\u5361\u5E2E\u52A9"),
        React.createElement("ul", { className: 'kuromc-text divide-y mt-10 p-4' }, [
            {
                title: 'kmc抽卡(UP|常驻)记录',
                content: '抽卡分析'
            },
            {
                title: 'kmc抽卡记录更新',
                content: '抽卡分析'
            },
            {
                title: 'kmc绑定抽卡链接',
                content: '抽卡分析'
            },
            {
                title: 'kmc获取抽卡链接',
                content: '抽卡分析'
            }
        ].map((item, index) => (React.createElement("li", { key: index, className: 'p-4' },
            React.createElement("div", { className: 'text-lg' }, item.title),
            React.createElement("p", { className: 'text-sm opacity-80' }, item.content))))),
        React.createElement(Footer, null)));
}

export { App as default };
