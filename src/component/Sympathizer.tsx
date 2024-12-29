import { LinkStyleSheet } from 'jsxp'
import React from 'react'
import cssURL from '@src/assets/index.css'
export default function Sympathizer({
  data
}: {
  data: {
    title: string
    url: string
  }[]
}) {
  return (
    <html>
      <head>
        <LinkStyleSheet src={cssURL} />
      </head>
      <body>
        <div className="p-2">
          <div className="text-5xl">共鸣者</div>
          <div className="flex flex-wrap gap-2">
            {data.map(item => (
              <div className="flex border flex-col rounded-md">
                <img src={item.url}></img>
                <div className="bg-black text-white px-2 py-1">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  )
}
