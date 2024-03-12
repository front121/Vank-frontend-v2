export interface CountryRepository {
    getToken(): Promise<any[]>
    findCountry(): Promise<any[]>
    findState(): Promise<any[]>
    findCity(): Promise<any[]>
}