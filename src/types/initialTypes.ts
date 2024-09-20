export interface quickMenuType {
  id: number;
  name: string;
  imgUrl: string;
  link: string;
}

export interface cartMenuType {
  id: number;
  name: string;
  link: string;
}

export interface mainComponentListType {
  id: number;
  name: string;
  component: React.FC;
}

// footer
export interface footerMenuListType {
  id: number;
  name: string;
  link: string;
}

export interface guideListType {
  id: number;
  name: string;
  url: string;
}

export interface socialLinkType {
  id: number;
  name: string;
  url: string;
  icon: React.FC<{ size?: number; color?: string }>;
}

export interface footerCompanyInfoType {
  id: number;
  name: string;
  url: string;
  target: string;
}

// tab
export interface tabMenuType {
  id: number;
  name?: string;
  url: string;
  icon: React.FC;
}

export interface brandNameType {
  brand_list_type: string;
  brand_index_letter: string;
  brand_name: string;
  brand_name_ko: string;
  ctg_no: string;
}
