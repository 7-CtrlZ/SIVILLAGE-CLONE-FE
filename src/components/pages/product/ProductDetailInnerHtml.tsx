'use client';
import React, { useEffect, useState } from 'react';

function ProductDetailInnerHtml({ htmlData }: { htmlData: string }) {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlData, 'text/html');

    const scripts = doc.querySelectorAll('script');
    scripts.forEach((script) => script.remove());

    const metas = doc.querySelectorAll('meta');
    metas.forEach((meta) => meta.remove());

    const headers = doc.querySelectorAll('head');
    headers.forEach((header) => header.remove());

    // // 특정 클래스가 포함된 요소만 선택 (예: .product-detail-content)
    // const filteredElements = doc.querySelectorAll('.product-detail-content');
    // const filteredHTML = Array.from(filteredElements)
    //   .map((el) => el.outerHTML)
    //   .join('');
    setData(doc.body.innerHTML);
  }, [htmlData]);

  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}

export default ProductDetailInnerHtml;
