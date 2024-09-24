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

// 제네릭을 사용하는 CommonResType 정의
export interface CommonResType<T> {
  status: string;
  message: string;
  data: T;
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
  productUuid: string;
  productCode: string;
  brandId: number;
  brandName: string;
  productName: string;
  productDescription: string;
  price: number;
  discount: number;
  finalPrice: number;
  options: { mainOptionId: number }[];
  isliked: boolean;
}

export interface ProductImages {
  mainOptionId: number;
  imageUrl: string;
  imageDescription: string;
  isMainImage: boolean;
}

export interface ProductListPageProps {
  products: ProductDetail[];
}
