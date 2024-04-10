import { inject, injectable } from "inversify";
import { environment } from "./environments/environment.dev";
import { HttpRepositoryVerifik, HttpRequestParams } from "./index";

@injectable()
export class FetchClientRepositoryVerifik implements HttpRepositoryVerifik {
  private readonly authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjY1ZjA4Y2JiYWVmOGEzOWUxMzMyYTEwNSIsInYiOjIsInJvbGUiOiJjbGllbnQiLCJKV1RQaHJhc2UiOiI2NWYwOGM5MDE4ZDZkMWI2MTQxMGE3NmQiLCJleHBpcmVzQXQiOiIyMDI0LTA0LTIxIDIxOjE5OjU2IiwiaWF0IjoxNzExMTQyMzk2fQ.8f_cymrQejxYgK3QjWgNBC38JdF6SQG0bia2WU-Pe8c";
  private readonly _baseUrl = "https://api.verifik.co/v2/";

  constructor(@inject("baseUrl") private readonly baseUrl: string) {}

  async get<T>(url: string, params?: HttpRequestParams): Promise<T> {
    console.log(`${environment.country.baseUrl}${url}`);
    console.log({ ...params?.headers });

    const response = await fetch(`${environment.country.baseUrl}${url}`, {
      method: "GET",
      headers: {
        ...params?.headers,
        "Content-Type": "application/json",
        // Authorization: this.authorization,
      },
      // credentials: "include",
      mode: "cors",
    });

    const data = await response.json();
    return data;
  }

  async post<T>(
    url: string,
    body: any,
    params?: HttpRequestParams
  ): Promise<T> {
    // const { headers = {}, } = params;
    console.log(body);

    const response = await fetch(`${this._baseUrl}${url}`, {
      method: "POST",
      headers: {
        ...params?.headers,
        // ...headers,
        "Content-Type": "application/json",
        authorization: this.authorization,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  }

  async put<T>(url: string, body: any, params?: HttpRequestParams): Promise<T> {
    const response = await fetch(`${this.baseUrl} + ${url}`, {
      method: "PUT",
      headers: {
        ...params?.headers,
        "Content-Type": "application/json",
        // Authorization: this.authorization,
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  }

  async patch<T>(
    url: string,
    body: any,
    params?: HttpRequestParams
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl} + ${url}`, {
      method: "PATCH",
      headers: {
        ...params?.headers,
        "Content-Type": "application/json",
        // Authorization: this.authorization,
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  }

  async delete<T>(url: string, params?: HttpRequestParams): Promise<T> {
    const response = await fetch(`${this.baseUrl} + ${url}`, {
      method: "DELETE",
      headers: {
        // ...headers,
        ...params?.headers,
        "Content-Type": "application/json",
        // Authorization: this.authorization,
      },
      credentials: "include",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  }
}
