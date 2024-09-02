export interface reviewResponseDataType {
  HttpStatus: string;
  code: number;
  message: string;
  data: reviewListDataType;
}

export interface reviewListDataType {
  totalCnt: number;
  page: number;
  isLastPage: boolean;
  reviewData: reviewDataType[];
}

export interface reviewDataType {
  reviewId: number;
  rating: number;
  reviewLikeCount: number;
  reviewer: string;
  reviewDate: string;
  reviewrSize: string;
  reviewTitle: string;
  reviewContent: string;
  productOption: string;
  reviewImages: {
    reviewImageId: number;
    reviewImageUrl: string;
    reviewImageName: string;
  }[];
  reviewitems: {
    id: number;
    value: string;
  }[];
}

export interface commonResType {
  status: string;
  message: string;
  data: any;
}

export interface topCategoryType {
  topCategoryCode: string;
  topCategoryName: string;
  topCategoryDescription: string;
}

export interface middleCategoryType {
  middleCategoryCode: string;
  middleCategoryName: string;
  middleCategoryDescription: string;
  topCategoryCode: string;
}

export interface bottomCategoryType {
  bottomCategoryCode: string;
  bottomCategoryName: string;
  bottomCategoryDescription: string;
  middleCategoryCode: string;
}
