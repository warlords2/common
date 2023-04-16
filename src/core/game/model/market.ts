import { IOffer } from "./market/offer";
import { ISale } from "./market/sale";
import { ITransaction } from "./market/transaction";

export interface IMarket{
    offers: IOffer[];
    sales: ISale[];
}