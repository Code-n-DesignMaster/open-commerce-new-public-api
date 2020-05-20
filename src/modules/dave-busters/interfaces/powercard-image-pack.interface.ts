import { IPowercardImage } from './powercard-image.interface';

export interface IPowercardImagePack {
  uuid: string;
  fullsizeImages: IPowercardImage[];
  thumbnailImages: IPowercardImage[];
  name: string;
}
