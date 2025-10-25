import React from 'react';
import Page from './layout/page';
export default function App() {
  return (
    <Page>
      <h2 className='text-4xl font-bold tracking-tight text-center pt-8 kuromc-text-title'>鸣潮插件帮助</h2>
      <ul className='kuromc-text border-t border-b divide-y mt-10 p-4'>
        {[
          {
            title: 'kmc帮助',
            content: '插件帮助信息'
          },
          {
            title: 'kmc版本活动',
            content: '正在进行的活动'
          },
          {
            title: 'kmc武器唤取活动',
            content: '正在进行的武器活动'
          },
          {
            title: 'kmc角色唤取活动',
            content: '正在进行的武器活动'
          },
          {
            title: 'kmc抽卡帮助',
            content: '抽卡帮助信息'
          },
          {
            title: 'kmc(共鸣者|角色图鉴)',
            content: '查看角色列表'
          },
          {
            title: 'kmc武器图鉴',
            content: '查看武器列表'
          },
          {
            title: 'kmc武器投影图家',
            content: '查看武器投影列表'
          }
        ].map((item, index) => (
          <li key={index} className='p-4'>
            <div className='text-lg'>{item.title}</div>
            <p className='text-sm opacity-80'>{item.content}</p>
          </li>
        ))}
      </ul>
    </Page>
  );
}
