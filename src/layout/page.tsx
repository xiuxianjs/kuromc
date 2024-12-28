import React, { PropsWithChildren } from "react";
import Footer from "./footer";
export default function App({ children }: PropsWithChildren) {
  return (
    <>
      <div className="kuromc-container kuromc-bg-img relative p-10 pb-[72px]">
        {children}
        <Footer />
      </div>
    </>
  );
}
