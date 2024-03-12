export interface HttpParameters {
  url?: string;
  baseURL: string;
  headers?: any;
  params?: string;
  data?: any;
  responseType?: ResponseType;
  timeout?: number;
}

export interface HttpClientRepository<T> {
  get(httpParametersClass: HttpParameters): Promise<T>;

  post(httpParametersClass: HttpParameters): Promise<T>;

  put(httpParametersClass: HttpParameters): Promise<T>;

  delete(httpParametersClass: HttpParameters): Promise<void>;
}
