import { IMarket } from "@core";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
import { Transaction } from "./market/transaction";

export class Market implements IMarket{
    offers: Offer[];
    sales: Sale[];
    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}