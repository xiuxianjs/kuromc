import React from 'react';
import { renders, LinkStyleSheet } from 'jsxp';
import fileUrl from '../assets/kuromc.css.js';
import App$1 from './GachaHelp.js';
import GaChaApp from './GaChaApp.js';
import App from './HelpApp.js';

const HtmlComponent = (props) => {
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement(LinkStyleSheet, { src: fileUrl })),
        React.createElement("body", null, props.children)));
};
const ViewGacha = () => {
    return (React.createElement(HtmlComponent, null,
        React.createElement(App$1, null)));
};
const ViewGachaIndex = (props) => {
    return (React.createElement(HtmlComponent, null,
        React.createElement(GaChaApp, { ...props })));
};
const ViewHelp = () => {
    return (React.createElement(HtmlComponent, null,
        React.createElement(App, null)));
};
const picRender = renders({
    Gacha: ViewGacha,
    GachaIndex: ViewGachaIndex,
    Help: ViewHelp
});

export { picRender };
