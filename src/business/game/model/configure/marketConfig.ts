import { IMarketConfig } from "@core";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class MarketConfig implements IMarketConfig{
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

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}