import { HeartIcon, Share2 } from 'lucide-react';
import React from 'react';

function ProductDetailLikeAndShare() {
  return (
    <div className="absolute top-4 right-5">
      <div className="flex items-center gap-5">
        <HeartIcon strokeWidth={1} size={20} />
        <Share2 strokeWidth={1} size={22} />
      </div>
    </div>
  );
}

export default ProductDetailLikeAndShare;
