import { IUnit } from "@core";
import { UnitType } from "./unitType";

export class Unit implements IUnit{
    
    unitType: UnitType;
    ammount: number;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}