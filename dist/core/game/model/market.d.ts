import { IOffer } from "./market/offer";
import { ISale } from "./market/sale";
export interface IMarket {
    offers: IOffer[];
    sales: ISale[];
}
