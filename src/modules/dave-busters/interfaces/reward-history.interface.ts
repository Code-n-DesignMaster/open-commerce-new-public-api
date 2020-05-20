import { IRewardTransaction } from './reward-transaction.interface';
export interface IRewardHistory {
  rewardPoints: number;
  pointsToNextReward: number;
  eligibleRewardCount: number;
  transactions: IRewardTransaction[];
}
