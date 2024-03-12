import { FetchHttpClientRepository } from "../../../apps/Shared/Http/FetchHttp";
import { environment } from "../../../apps/Shared/Http/environments/environment.dev";
import { CountryRepository } from "../domain/domain";

export class HttpAddressRepository implements CountryRepository {

  private readonly domain = environment.baseUrl;

  private readonly path = "/backoffice/Address";
  
  private readonly httpRepository: FetchHttpClientRepository<HttpAddressRepository>;

  constructor(
    httpRepository: FetchHttpClientRepository<HttpAddressRepository>
  ) {
    this.httpRepository = httpRepository;
  }

  async getToken(): Promise<any[]> {
    const response = await this.httpRepository.get({
      url: this.path,
      baseURL: this.domain,
    });
    return response.value;
  }

  async findCountry(): Promise<any[]> {
    const response = await this.httpRepository.get({
      url: this.path,
      baseURL: this.domain,
    });
    return response.value;
  }

  async findState(): Promise<any[]> {
    const response = await this.httpRepository.get({
      url: this.path,
      baseURL: this.domain,
    });
    return response.value;
  }
  async findCity(): Promise<any[]> {
    const response = await this.httpRepository.get({
      url: this.path,
      baseURL: this.domain,
    });
    return response.value;
  }
}
