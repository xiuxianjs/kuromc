import React, { PropsWithChildren } from "react";
import { LinkStyleSheet, renders } from "jsxp";
import css from "../public/kuromc.css";
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
import ViewGachaApp from "../views/gacha/gachaHelp";
import ViewGachaIndexApp, { GaChaAppProps } from "../views/gacha/index";
import ViewHelpApp from "../views/help/index";
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
  Help: ViewHelp,
});
