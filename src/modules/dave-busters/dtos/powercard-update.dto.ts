import { PowercardAttributesUpdateDto } from './powercard-attributes-update.dto';

export class PowercardUpdateDto {
  public powercardId!: string;
  public attributes: PowercardAttributesUpdateDto;
}
