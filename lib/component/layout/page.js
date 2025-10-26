import React from 'react';
import Footer from './footer.js';
import { BackgroundImage } from 'jsxp';
import fileUrl from '../../assets/image/background.jpg.js';

function Page({ children }) {
    return (React.createElement(BackgroundImage, { src: fileUrl, className: 'kuromc-container kuromc-bg-img relative p-6 pb-[72px]' },
        children,
        React.createElement(Footer, null)));
}

export { Page as default };
