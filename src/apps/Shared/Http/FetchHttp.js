import { environment } from "./environments/environment.dev";

export class FetchHttpClientRepository {
  //   private readonly authorization = '';

  async get(httpParams) {
    const response = await fetch(`${environment.baseUrl}/${httpParams.url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': this.authorization,
      },
      credentials: "include",
      mode: "cors",
    });

    const _data = await response.json();

    return _data;
  }

  async post(httpParams) {
    const { url, data } = httpParams;

    const response = await fetch(`${environment.baseUrl}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': this.authorization,
      },
      credentials: "include",
      mode: "cors",
      body: data,
    });

    const _data = await response.json();

    return _data;
  }

  async put(httpParams) {
    const { url, data } = httpParams;

    const response = await fetch(`${environment.baseUrl}/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': this.authorization,
      },
      credentials: "include",
      mode: "cors",
      body: data,
    });

    const _data = await response.json();

    return _data;
  }

  async delete(httpParams) {
    const response = await fetch(`${environment.baseUrl}/${httpParams.url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': this.authorization,
      },
      credentials: "include",
      mode: "cors",
    });
    const _data = await response.json();
    return _data;
  }
}
