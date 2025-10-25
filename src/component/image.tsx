import React, { PropsWithChildren } from 'react';
import { LinkStyleSheet, renders } from 'jsxp';
import css from '@src/assets/kuromc.css';
const HtmlComponent = (props: PropsWithChildren) => {
  return (
    <html>
      <head>
        <LinkStyleSheet src={css} />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

import ViewGachaApp from '@src/component/GachaHelp';
import ViewGachaIndexApp, { GaChaAppProps } from './GaChaApp';
import ViewHelpApp from './HelpApp';
const ViewGacha = () => {
  return (
    <HtmlComponent>
      <ViewGachaApp />
    </HtmlComponent>
  );
};
const ViewGachaIndex = (props: GaChaAppProps) => {
  return (
    <HtmlComponent>
      <ViewGachaIndexApp {...props} />
    </HtmlComponent>
  );
};
const ViewHelp = () => {
  return (
    <HtmlComponent>
      <ViewHelpApp />
    </HtmlComponent>
  );
};

export const picRender = renders({
  Gacha: ViewGacha,
  GachaIndex: ViewGachaIndex,
  Help: ViewHelp
});
