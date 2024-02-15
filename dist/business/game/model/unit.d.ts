import { IUnit } from "../../../core/index.js";
import { UnitType } from "./unitType";
export declare class Unit implements IUnit {
    type: UnitType;
    ammount: number;
    constructor(values?: any);
}
