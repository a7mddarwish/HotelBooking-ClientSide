export interface ApiResponse<T> {
  data: T;
  isSuccess: boolean;
  errors: string[] | null;
}