import { POWERCARD_STATUS_TYPE } from '../constants/powercard-status.enum';
import { POWERCARD_CARD_TYPE } from '../constants/powercard-type.enum';
import { IPowercardImagePack } from './powercard-image-pack.interface';
import { IWalletPass } from './wallet-pass.interface';

export interface IPowercard {
  uuid: string;
  isPhysical: boolean;
  cardNumber: string;
  status: POWERCARD_STATUS_TYPE;
  cardType: POWERCARD_CARD_TYPE;
  cardAlias: string;
  imagePack: IPowercardImagePack;
  gameChips: number;
  videoChips: number;
  rewardChips: number;
  attractionChips: number;
  tickets: number;
  rewardPoints: number;
  pointsToNextReward: number;
  isRegisteredReward: boolean;
  easyRechargeEnabled: boolean;
  customerUuid?: string;
  walletPass: IWalletPass;
}
