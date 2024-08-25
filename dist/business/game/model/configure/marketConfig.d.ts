import { IMarketConfig } from "../../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class MarketConfig implements IMarketConfig {
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
    examples: MarketConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
