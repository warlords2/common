import { IMarket } from "../../../core/index.js";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
import { World } from "./world";
export declare class Market implements IMarket {
    offers: Offer[];
    sales: Sale[];
    world: World;
    constructor(values?: any);
}
