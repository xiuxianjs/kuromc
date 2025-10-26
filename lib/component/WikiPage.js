import { LinkStyleSheet } from 'jsxp';
import React from 'react';
import fileUrl from '../assets/index.css.js';
import { cataLogBGURL, cataLogMcBGURL } from '../assets/imageURL.js';

const BackgroundImage = (props) => {
    const { src, ...rest } = props;
    return (React.createElement("div", { style: {
            backgroundImage: `url(${src})`
        }, ...rest }));
};
function WikiPage({ children }) {
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement(LinkStyleSheet, { src: fileUrl })),
        React.createElement("body", null,
            React.createElement(BackgroundImage, { className: 'bg-cover bg-center', src: cataLogBGURL },
                React.createElement(BackgroundImage, { className: 'bg-cover bg-center', src: cataLogMcBGURL },
                    React.createElement("div", { className: 'p-4' }, children))))));
}

export { WikiPage as default };
