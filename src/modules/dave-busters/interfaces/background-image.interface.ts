import { IImage } from './image.interface';

export interface IBackgroundImage {
  activeAt: Date;
  images: IImage[];
}
