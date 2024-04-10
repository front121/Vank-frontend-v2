export interface ValidateSendOtpRepository {
  postSendValidateEmail(data: any): Promise<any[]>;
  postSendConfirmationEmail(data: any): Promise<any[]>;
  postSendValidatePhone(data: any): Promise<any[]>;
  postSendConfirmationPhone(data: any): Promise<any[]>;
}
