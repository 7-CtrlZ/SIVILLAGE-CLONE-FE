import React from 'react';
import { HeartIcon } from 'lucide-react';
import { TextUi } from '@/components/ui/TextUi';

const goodsOptionBottomMenu = [
  {
    id: 1,
    title: '찜하기',
    cols: 'col-span-2',
    bg: null,
    icon: <HeartIcon strokeWidth={0.8} />,
  },
  {
    id: 2,
    title: '쇼핑백',
    cols: 'col-span-5',
    bg: null,
    icon: null,
  },
  {
    id: 3,
    title: '구매하기',
    cols: 'col-span-5',
    bg: 'bg-siBlack',
    icon: null,
  },
];

function ProductTabButton({
  handleView,
}: {
  handleView: (value: boolean) => void;
}) {
  // const handleView = useProductOptionStore((state) => state.handleView);
  const handleIsLike = () => {
    console.log('찜하기');
  };

  return (
    <section className="fixed bottom-0 left-0 z-[310] border-t-[1px] border-[#33333350] bg-white w-full">
      <ul className="grid grid-cols-12 w-full">
        {goodsOptionBottomMenu.map((menu) => (
          <li
            key={menu.id}
            className={`
              ${menu.cols} 
              px-2 flex justify-center items-center h-[52px] border-r-[1px] border-[#33333350] last:border-r-0
              ${menu.bg}
            `}
            onClick={menu.id === 1 ? handleIsLike : () => handleView(true)}
          >
            {menu.icon ? (
              menu.icon
            ) : (
              <TextUi size={'md'} variant={menu.bg ? 'white' : 'default'}>
                {menu.title}
              </TextUi>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductTabButton;
