import React from 'react'
import Page from './layout/page'
export default function App() {
  return (
    <Page>
      <h2 className="text-4xl font-bold tracking-tight text-center pt-8 kuromc-text-title">
        鸣潮插件帮助
      </h2>
      <ul className="kuromc-text border-t border-b divide-y mt-10 p-4">
        {[
          {
            title: 'kmc帮助',
            content: '插件帮助信息'
          },
          {
            title: 'kmc抽卡帮助',
            content: '抽卡帮助信息'
          },
          {
            title: 'kmc(唤取/抽卡/hq)(UP/常驻)',
            content: '抽卡分析'
          },
          {
            title: 'kmc版本活动',
            content: '查看当前鸣潮游戏正在进行的活动'
          },
          {
            title: 'kmc当期up',
            content: '查看鸣潮当前正在up的角色'
          }
        ].map((item, index) => (
          <li key={index} className="p-4">
            <div className="text-lg">{item.title}</div>
            <p className="text-sm opacity-80">{item.content}</p>
          </li>
        ))}
      </ul>
    </Page>
  )
}
