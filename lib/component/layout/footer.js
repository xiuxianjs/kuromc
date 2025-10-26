import React from 'react';
import util from '../../models/util.js';

function Footer() {
    return (React.createElement("footer", { className: 'text-gray-300 py-6 absolute left-0 bottom-0 w-full ' },
        React.createElement("div", { className: 'text-center' },
            React.createElement("p", null,
                "create by ",
                React.createElement("span", { className: 'kuromc-text-title' }, "kuromc-plugin"),
                " v",
                React.createElement("span", { className: 'italic' }, util.version)))));
}

export { Footer as default };
