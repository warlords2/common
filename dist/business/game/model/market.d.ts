import { IMarket } from "../../../core/index.js";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
export declare class Market implements IMarket {
    offers: Offer[];
    sales: Sale[];
    constructor(values?: any);
}
