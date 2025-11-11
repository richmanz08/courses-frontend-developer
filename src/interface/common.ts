// T is "Generic Type Parameter"
export interface ResponseData<T> {
  data: T;
  message: string;
  status: number;
}
