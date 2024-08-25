import { IOffer } from "./market/offer";
import { ISale } from "./market/sale";
import { IWorld } from "./world";
export interface IMarket {
    offers: IOffer[];
    sales: ISale[];
    world: IWorld;
}
