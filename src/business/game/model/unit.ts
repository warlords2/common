import { IUnit, UnitType } from "@core";

export class Unit implements IUnit{
    type: UnitType
    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}