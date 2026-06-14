import { ApiResponse, FieldErrorDetail } from "@/types/ApiResponse";

const BASE_URL = "http://localhost:8080";

export class ApiException extends Error {
  constructor(
    public code: string,
    message: string,
    public detail?: FieldErrorDetail[] | null,
  ) {
    super(message);
    this.name = "ApiException";
  }
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...init?.headers },
    ...init,
  });

  const body: ApiResponse<T> = await res.json();

  if (!res.ok || !body.success) {
    throw new ApiException(
      body.error?.code ?? "UNKNOWN",
      body.error?.message ?? "UNKNOWN",
      body.error?.detail,
    );
  }

  return body.data;
}
