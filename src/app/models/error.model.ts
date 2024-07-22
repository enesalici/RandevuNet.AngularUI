export interface ApiErrorResponse {
  Type: string;
  Title: string;
  Status: number;
  Detail: string;
  Errors: ErrorDetail[];
}

export interface ErrorDetail {
  Property: string;
  Errors: string[];
}
