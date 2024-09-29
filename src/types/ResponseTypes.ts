export interface ReviewResponseDataType {
  HttpStatus: string;
  code: number;
  message: string;
  data: ReviewListDataType;
}

export interface ReviewListDataType {
  totalCnt: number;
  page: number;
  isLastPage: boolean;
  reviewData: ReviewDataType[];
}

export interface ReviewDataType {
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

export interface CommonResType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface UserData {
  id: string;
  accessToken: string;
  name: string;
}

export interface TopCategoryType {
  topCategoryCode: string;
  topCategoryName: string;
}

export interface MiddleCategoryType {
  topCategoryCode: string;
  middleCategoryCode: string;
  middleCategoryName: string;
}

export interface BottomCategoryType {
  middleCategoryCode: string;
  bottomCategoryCode: string;
  bottomCategoryName: string;
}

export interface SubCategoryType {
  bottomCategoryCode: string;
  subCategoryCode: string;
  subCategoryName: string;
}

export interface productcodelist {
  productCode: string;
}

export interface ProductDetail {
  // productUuid: string;
  productCode: string;
  // brandId: number;
  brandName: string;
  productName: string;
  productDescription: string;
  productDetailContent: string;
  price: number;
  mainOptionList: mainOptionListType[];
  // isliked: boolean;
}

export interface mainOptionListType {
  mainOptionId: number;
  mainOptionName: string;
}

export interface ProductOptionImage {
  mainOptionId: number;
  imageUrl: string;
  imageDescription: string;
  isMainImage: boolean;
}

export interface ProductListPageProps {
  products: ProductDetail[];
}
