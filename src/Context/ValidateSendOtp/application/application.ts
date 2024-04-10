import { inject, injectable } from "inversify";
import type { ValidateSendOtpRepository } from "../domain/domain";

@injectable()
export class ValidateSendOtp {
  constructor(
    @inject("ValidateSendOtpRepository")
    private readonly repository: ValidateSendOtpRepository
  ) {}

  async postSendValidateEmail(data: any): Promise<any[]> {
    const validate = await this.repository.postSendValidateEmail(data);
    return validate;
  }

  async postSendConfirmationEmail(data: any): Promise<any[]> {
    const validate = await this.repository.postSendConfirmationEmail(data);
    return validate;
  }
 
  async postSendValidatePhone(data: any): Promise<any[]> {
    const validate = await this.repository.postSendValidatePhone(data);
    return validate;
  }

  async postSendConfirmationPhone(data: any): Promise<any[]> {
    const validate = await this.repository.postSendConfirmationPhone(data);
    return validate;
  }
}
