import React from 'react';
import WikiPage from './WikiPage';
import { largeFigureBGNormalMCURL } from '@src/assets/imageURL';

const BackgroundImage = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    src: string;
  }
) => {
  const { src, ...rest } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: '100% auto'
      }}
      {...rest}
    />
  );
};

export default function CharacterCatalog({
  titile,
  data
}: {
  titile: string;
  data: {
    title: string;
    url: string;
  }[];
}) {
  const imageData =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAABACAYAAAB7qyKHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LmMwMjA0YjJkZWYsIDIwMjMvMDIvMDItMTI6MTQ6MjQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC41IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQkFGMTM4QzA1NTExMUVGODg3QUQ0RDU3NDFDNzI3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQkFGMTM4RDA1NTExMUVGODg3QUQ0RDU3NDFDNzI3OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFCQUYxMzhBMDU1MTExRUY4ODdBRDRENTc0MUM3Mjc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFCQUYxMzhCMDU1MTExRUY4ODdBRDRENTc0MUM3Mjc4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vqbZLwAABjxJREFUeNrs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';

  return (
    <WikiPage>
      <div className='text-4xl px-2 py-4 border-t rounded-md bg-black text-white'>{titile}</div>
      <div className='flex border-b rounded-md flex-wrap py-2 gap-2 justify-center items-center'>
        {data.map(item => (
          <BackgroundImage src={largeFigureBGNormalMCURL}>
            <div className='flex border flex-col rounded-md'>
              <div className='realative'>
                <img className='w-44' src={item.url} />
                {
                  // 均分。
                  // 分为6份。多少就显示几分之几。
                }
                <BackgroundImage src={imageData} className='h-8' />
              </div>
              <div
                className='bg-black text-white px-2 py-1
              flex items-center justify-center
              '
              >
                {item.title}
              </div>
            </div>
          </BackgroundImage>
        ))}
      </div>
    </WikiPage>
  );
}
