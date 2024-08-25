import { IUnitConfig } from "../../../../core/index.js";
import { UnitType } from "../unitType";
import { ValidationError } from "class-validator";
export declare class UnitConfig implements IUnitConfig {
    name: String;
    healthInExternalProvincePercentage: number;
    damageInExternalProvincePercentage: number;
    txReviveInExternalProvincePercentage: number;
    agilityInExternalProvincePercentage: number;
    rangeInExternalProvincePercentage: number;
    speedInExternalProvincePercentage: number;
    unitsType: UnitType[];
    examples: UnitConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
