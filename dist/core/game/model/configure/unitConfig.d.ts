import { IUnitType } from "../unitType";
export interface IUnitConfig {
    name: String;
    healthInExternalProvincePercentage: number;
    damageInExternalProvincePercentage: number;
    txReviveInExternalProvincePercentage: number;
    agilityInExternalProvincePercentage: number;
    rangeInExternalProvincePercentage: number;
    speedInExternalProvincePercentage: number;
    unitsType: IUnitType[];
    examples: IUnitConfig[];
}
