import { IOffer } from "./market/offer";
import { ISale } from "./market/sale";
import { ITransaction } from "./market/transaction";

export interface IMarket{
    txPercentage: number;
    offers: IOffer[];
    sales: ISale[];
}