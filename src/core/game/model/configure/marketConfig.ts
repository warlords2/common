export interface IMarketConfig{
    name: String;
    txPercentage: number;
    
    hasMaxOffersForPlayer: boolean;
    maxOffersForPlayer: number;

    hasMaxOffersForCity: boolean;
    maxMaxOffersForCity: number;

    limitedTimeOffers: boolean;
    limitTimeOffersInHours: number;

    limitedDistanceTrade: boolean;
    limitDistanceTrade: number;

    limitedProvinceSaltTrade: boolean;
    limitProvinceSaltTrade: number;

    examples: IMarketConfig[];
}