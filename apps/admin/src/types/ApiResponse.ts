export interface FieldErrorDetail {
  field: string;
  reason: string;
}

export interface ApiError {
  code: string;
  message: string;
  detail?: FieldErrorDetail[] | null;
}

export type ApiResponse<T> =
  | { success: true; data: T; error: null }
  | { success: false; data: null; error: ApiError };
