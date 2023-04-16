import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
import { Transaction } from "./market/transaction";

export class Market{
    offers: Offer[];
    sales: Sale[];
}