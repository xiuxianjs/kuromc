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
        <div className="flex flex-wrap gap-2">
          {data.map(item => (
            <div className="flex border flex-col">
              <img src={item.url}></img>
              <div className="bg-black text-white">{item.title}</div>
            </div>
          ))}
        </div>
      </body>
    </html>
  )
}
