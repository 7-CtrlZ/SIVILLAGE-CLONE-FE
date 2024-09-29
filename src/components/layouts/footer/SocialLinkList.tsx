import { socialLinkData } from '@/datas/initialData';
import Link from 'next/link';
import React, { createElement } from 'react';

export default function SocialLinkList() {
  const size = 18;
  return (
    <ul className="flex justify-start items-center gap-4 py-4">
      {socialLinkData.map((socialLink) => (
        <li key={socialLink.id} className={`w-[${size}px] h-[${size}px]`}>
          <Link href={socialLink.url} target="_blank" rel="noreferrer">
            {createElement(socialLink.icon, {
              size: size,
            })}
          </Link>
        </li>
      ))}
    </ul>
  );
}
