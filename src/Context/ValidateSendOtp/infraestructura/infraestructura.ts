import { inject, injectable } from "inversify";
import type { HttpRepositoryVerifik } from "@/apps/Shared/Http";

@injectable()
export class HttpValidateSendOtpRepository {
  // private readonly path = "/";

  constructor(
    @inject("HttpRepositoryVerifik")
    private readonly httpRepository: HttpRepositoryVerifik
  ) {}

  async postSendValidateEmail(body: any): Promise<any[]> {
    const response = await this.httpRepository.post<any[]>(
      `email-validations`,
      body
    );
    return response;
  }
  async postSendConfirmationEmail(body: any): Promise<any[]> {
    console.log(body);

    const response = await this.httpRepository.post<any[]>(
      `email-validations/validate`,
      body
    );
    return response;
  }
  async postSendValidatePhone(body: any): Promise<any[]> {
    const response = await this.httpRepository.post<any[]>(
      `phone-validations`,
      body
    );
    console.log(response);
    
    return response;
  }
  async postSendConfirmationPhone(body: any): Promise<any[]> {
    const response = await this.httpRepository.post<any[]>(
      `phone-validations/validate`,
      body
    );
    return response;
  }
}
