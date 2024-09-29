'use client';
import React, { useEffect } from 'react';
import { TextUi } from '@/components/ui/TextUi';
import { motion } from 'framer-motion';
import { useCustomSession } from '@/context/SessionContext';

export default function NotiCountView({ count }: { count: number }) {
  const isAuth = useCustomSession();

  if (!isAuth) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, top: -10 }}
      animate={{ opacity: 1, top: -3 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="absolute top-[-3px] right-[-8px] size-[20px] rounded-full bg-[#D99C63] flex items-center justify-center"
    >
      <TextUi className="text-white text-[0.65rem] font-pretendard leading-none">
        {count}
      </TextUi>
    </motion.div>
  );
}
