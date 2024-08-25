import { IUnitConfig, IUnitType } from "@core";
import { UnitType } from "../unitType";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class UnitConfig implements IUnitConfig{
    name: String;
    
    healthInExternalProvincePercentage: number;
    damageInExternalProvincePercentage: number;
    txReviveInExternalProvincePercentage: number;
    agilityInExternalProvincePercentage: number;
    rangeInExternalProvincePercentage: number;
    speedInExternalProvincePercentage: number;
    
    unitsType: UnitType[];
    examples: UnitConfig[];

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}