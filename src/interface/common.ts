// T is "Generic Type Parameter"
export interface ResponseData<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiResponseCommon<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}

export interface PaginationDataCommon<T> {
  list: T;
  totalCount: number;
  page: number;
  pageSize: number;
}
