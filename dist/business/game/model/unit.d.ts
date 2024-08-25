import { IUnit } from "../../../core/index.js";
import { UnitType } from "./unitType";
export declare class Unit implements IUnit {
    unitType: UnitType;
    ammount: number;
    constructor(values?: any);
}
