import { TextUi } from '@/components/ui/TextUi';
import { footerCompanyInfo } from '@/datas/initialData';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FooterCompanyLinkList = () => {
  return (
    <div className="flex justify-start gap-4 py-6">
      {footerCompanyInfo.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          data-di-id="di-id-4ff0f7fb-5bb18d75"
          className="flex justify-start items-center gap-2"
        >
          <TextUi variant="lightGray" size="xs">
            {item.name}
          </TextUi>
          <ChevronRight size={12} strokeWidth={1} />
        </Link>
      ))}
    </div>
  );
};

export default FooterCompanyLinkList;
