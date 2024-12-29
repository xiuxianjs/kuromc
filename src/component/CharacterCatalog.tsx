import { LinkStyleSheet } from 'jsxp'
import React from 'react'
import cssURL from '@src/assets/index.css'
import Page from './layout/page'
export default function CharacterCatalog({
  titile,
  data
}: {
  titile: string
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
        <Page>
          <div className="p-2 ">
            <div className="text-5xl px-2 py-4 border rounded-md bg-black text-white">
              {titile}
            </div>
            <div className="flex border rounded-md flex-wrap gap-2 justify-center items-center">
              {data.map(item => (
                <div className="flex border flex-col rounded-md">
                  <img className="w-44" src={item.url}></img>
                  <div className="bg-black text-white px-2 py-1">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>
      </body>
    </html>
  )
}
