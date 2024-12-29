import React, { PropsWithChildren } from 'react'
import Footer from './footer'
import { BackgroundImage } from 'jsxp'
import imgURL from '@src/assets/image/background.jpg'
export default function Page({ children }: PropsWithChildren) {
  return (
    <BackgroundImage
      url={imgURL}
      className="kuromc-container kuromc-bg-img relative p-10 pb-[72px]"
    >
      {children}
      <Footer />
    </BackgroundImage>
  )
}
