export class PowercardCreateDto {
  public cardEncoding: string;
  public cardNumber: string;
  public rfidData: string;
  public alias: string;
  public easyRechargeEnabled: boolean;
  public imagePackUuid?: string;
  public pin: number;
}
