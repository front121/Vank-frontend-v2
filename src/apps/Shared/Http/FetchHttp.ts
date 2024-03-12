import { environment } from "./environments/environment.dev";
import { HttpClientRepository, HttpParameters } from "./index";

export class FetchHttpClientRepository<T> implements HttpClientRepository<T> {
  //   private readonly authorization = '';

  async get(httpParams: HttpParameters) {
    const { baseURL, url, headers } = httpParams;
    console.log({ baseURL, url, headers });
    
    const response = await fetch(`${baseURL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers
        // 'Authorization': this.authorization,
      },
      // credentials: "include",
      // mode: "cors",
    });

    
    const _data = await response.json();
    console.log(_data);

    return _data;
  }

  async post(httpParams: HttpParameters) {
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

  async put(httpParams: HttpParameters) {
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

  async delete(httpParams: HttpParameters) {
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
