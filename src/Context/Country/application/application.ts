import { CountryRepository } from "../domain/domain";

export class Country {
   repository: CountryRepository;

  constructor(repository: CountryRepository) {
    this.repository = repository;
  }

  async getToken(): Promise<any[]> {
    const country = await this.repository.getToken();
    return country;
  }

  async findCountry(): Promise<any[]> {
    const country = await this.repository.findCountry();
    return country;
  }

  async findState(): Promise<any[]> {
    const state = await this.repository.findState();
    return state;
  }

  async findCity(): Promise<any[]> {
    const city = await this.repository.findCity();
    return city;
  }
}
