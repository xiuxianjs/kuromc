import React, { useMemo } from 'react';
import Page from './layout/page.js';
import _ from 'lodash';
import role from '../models/data/role.js';
import weapon from '../models/data/weapon.js';

const GachaListItem = ({ record, type }) => {
    const { name, resourceId, count } = record;
    const conutTextColorClassName = useMemo(() => {
        if (count <= 30) {
            return 'text-[#84cc16]';
        }
        if (count <= 60) {
            return 'text-[#f59e0b]';
        }
        return 'text-[#ef4444]';
    }, [count]);
    if (!record?.name) {
        return null;
    }
    // logger.info('record', record)
    const items = type === '角色' ? role : weapon;
    const item = _(items).find(x => x.resourceId === resourceId || x.名字 === name);
    if (!item) {
        return null;
    }
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-black bg-opacity-50 rounded-lg overflow-hidden w-[96px] h-[130px]' },
            React.createElement("div", { className: 'p-4 relative' },
                React.createElement("img", { className: 'w-[60px] h-[60px]', src: item.avatar }),
                React.createElement("div", { className: `absolute left-0 bottom-0 h-[50%] w-[100%] kuromc-level-${item.星级 || record.src.qualityLevel}-bgc` }),
                item.up && (React.createElement("div", { className: 'absolute top-0 right-0 p-1 rounded bg-emerald-500/10 text-emerald-500 text-[14px] font-semibold leading-none ml-2' }, "up"))),
            React.createElement("div", { className: 'py-1 text-center' },
                React.createElement("span", { className: `text-[20px] font-bold ${conutTextColorClassName}` }, count),
                " \u62BD"))));
};
function GaChaApp({ roleData, weaponData, type }) {
    const viewType = type === 'UP' ? '精准' : '常驻';
    return (React.createElement(React.Fragment, null,
        React.createElement(Page, null,
            React.createElement("div", null,
                React.createElement("div", { className: 'relative' },
                    React.createElement("div", { className: 'kuromc-text-title text-4xl font-bold' },
                        React.createElement("span", null, "\u62BD\u5361\u5206\u6790"),
                        React.createElement("img", { className: 'mt-[4px] h-[36px] w-[210px]', src: 'https://web-static.kurobbs.com/resource/wiki/prod/assets/title-underline-mc-3c8ec006.svg' })),
                    React.createElement("div", { className: 'kuromc-gacha-bottom-line' },
                        React.createElement("div", { className: 'black-block' }),
                        React.createElement("div", { className: 'black-block', style: { right: -1, left: 'auto' } }))),
                React.createElement("div", { className: 'kuromc-gacha-body' },
                    React.createElement("div", { className: 'mt-10 border-l-4 pl-4 kuromc-text border-[#f2d57c]' },
                        React.createElement("div", { className: 'py-4 flex justify-between items-center' },
                            React.createElement("div", { className: 'text-2xl font-bold' },
                                "\u89D2\u8272",
                                viewType,
                                "\u8C03\u8C10"),
                            React.createElement("div", null,
                                "\u603B\u8BA1\u5DF2\u5524\u53D6",
                                React.createElement("span", { className: 'mx-2 text-xl' }, roleData.totalNum),
                                "\u6B21"),
                            React.createElement("div", null,
                                "\u5269\u4F59",
                                React.createElement("span", { className: 'mx-2 text-xl' }, 80 - roleData.lastNum),
                                "\u6B21\u5524\u53D6\u5FC5\u51FA\u4E94\u661F")),
                        React.createElement("div", { className: 'grid grid-cols-7 gap-4' }, _.map(roleData.data, (item, index) => (React.createElement(GachaListItem, { key: index, record: item, type: '\u89D2\u8272' })))),
                        roleData.countStartTime && roleData.countEndTime && (React.createElement("div", { className: 'kuromc-text mt-10 text-center opacity-80' },
                            "\u6570\u636E\u7EDF\u8BA1\u65F6\u95F4: ",
                            roleData.countStartTime,
                            " ~ ",
                            roleData.countEndTime))),
                    React.createElement("div", { className: 'mt-10 border-l-4 pl-4 kuromc-text border-[#f2d57c]' },
                        React.createElement("div", { className: 'py-4 flex justify-between items-center' },
                            React.createElement("div", { className: 'text-2xl font-bold' },
                                "\u6B66\u5668",
                                viewType,
                                "\u8C03\u8C10"),
                            React.createElement("div", null,
                                "\u5DF2\u5524\u53D6",
                                React.createElement("span", { className: 'mx-2 text-xl' }, weaponData.totalNum),
                                "\u6B21"),
                            React.createElement("div", null,
                                "\u5269\u4F59",
                                React.createElement("span", { className: 'mx-2 text-xl' }, 80 - weaponData.lastNum),
                                "\u6B21\u5524\u53D6\u51FA\u4E94\u661F")),
                        React.createElement("div", { className: 'grid grid-cols-7 gap-4' }, _.map(weaponData.data, (item, index) => (React.createElement(GachaListItem, { key: index, record: item, type: '\u6B66\u5668' })))),
                        weaponData.countStartTime && weaponData.countEndTime && (React.createElement("div", { className: 'kuromc-text mt-10 text-center opacity-80' },
                            "\u6570\u636E\u7EDF\u8BA1\u65F6\u95F4: ",
                            weaponData.countStartTime,
                            " ~ ",
                            weaponData.countEndTime))))))));
}

export { GaChaApp as default };
