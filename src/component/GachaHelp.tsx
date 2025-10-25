import React from 'react';
import Page from './layout/page';

const Footer = () => {
  return (
    <div className='kuromc-text border-l-4 bg-black bg-opacity-50 p-4 border-[#f2d57c]'>
      <h4 className='text-xl font-bold'>抽卡链接获取</h4>
      <div>
        <p className='mt-1'>手机打开抽卡界面，然后断网点开历史记录；左上角空白长按然后全选复制。</p>
        <p className='mt-1'>
          电脑打开抽卡，然后找到鸣潮安装目录找到Wuthering Waves\Wuthering Waves
          Game\Client\Saved\Logs\Client.log文件打开，搜索aki-gm-resources最后一条记录就是抽卡链接。
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Page>
      <h2 className='text-4xl font-bold tracking-tight text-center pt-8 kuromc-text-title'>鸣潮抽卡帮助</h2>
      <ul className='kuromc-text divide-y mt-10 p-4'>
        {[
          {
            title: 'kmc抽卡(UP|常驻)记录',
            content: '抽卡分析'
          },
          {
            title: 'kmc抽卡记录更新',
            content: '抽卡分析'
          },
          {
            title: 'kmc绑定抽卡链接',
            content: '抽卡分析'
          },
          {
            title: 'kmc获取抽卡链接',
            content: '抽卡分析'
          }
        ].map((item, index) => (
          <li key={index} className='p-4'>
            <div className='text-lg'>{item.title}</div>
            <p className='text-sm opacity-80'>{item.content}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </Page>
  );
}
