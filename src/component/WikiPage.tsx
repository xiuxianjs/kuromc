import { LinkStyleSheet } from 'jsxp';
import React, { PropsWithChildren } from 'react';
import cssURL from '@src/assets/index.css';
import { cataLogBGURL, cataLogMcBGURL } from '@src/assets/imageURL';

const BackgroundImage = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    src: string;
  }
) => {
  const { src, ...rest } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${src})`
      }}
      {...rest}
    />
  );
};

export default function WikiPage({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <LinkStyleSheet src={cssURL} />
      </head>
      <body>
        <BackgroundImage className='bg-cover bg-center' src={cataLogBGURL}>
          <BackgroundImage className='bg-cover bg-center' src={cataLogMcBGURL}>
            <div className='p-4'>{children}</div>
          </BackgroundImage>
        </BackgroundImage>
      </body>
    </html>
  );
}
