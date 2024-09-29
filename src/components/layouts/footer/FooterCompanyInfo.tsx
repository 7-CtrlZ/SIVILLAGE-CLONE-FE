import Link from 'next/link';
import { TextUi } from '@/components/ui/TextUi';

const FooterCompanyInfo = () => {
  return (
    <>
      <address className="not-italic text-xs leading-5 text-[#a0a0a0]">
        서울특별시 강남구 도산대로 449 (청담동)
      </address>
      <TextUi variant={'lightGray'} size={'xs'} className="leading-5">
        대표이사 : 윌리엄김
        <br />
        사업자등록번호 : 201-81-53657
        <br />
        통신판매업 신고번호 : 강남-13797
        <br />
        개인정보보호책임자 : 임홍철
        <br />
        호스팅사업자 : ㈜신세계아이앤씨
        <br />
        고객센터(유료) : 1644-4490
        <br />
        이메일 :{' '}
        <Link
          href="mailTo:siv_cs@sikorea.co.kr"
          data-di-id="di-id-6cf3dff1-e65f9216"
        >
          siv_cs@sikorea.co.kr
        </Link>
      </TextUi>
    </>
  );
};

export default FooterCompanyInfo;
